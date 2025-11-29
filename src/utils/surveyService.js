/**
 * 설문조사 결과를 Google Sheets에 저장하는 서비스
 */

// 환경변수에서 웹훅 URL 가져오기
const GOOGLE_SHEETS_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';

/**
 * 설문조사 결과를 Google Sheets에 저장
 * @param {Object} surveyData - 설문조사 데이터
 * @param {string} surveyData.language - 언어 ('ko' | 'en')
 * @param {Array<string>} surveyData.answers - 답변 배열
 * @param {number} surveyData.recommendedChef - 추천된 쉐프 ID (1, 2, 3)
 * @param {string} surveyData.chefName - 쉐프 이름
 * @returns {Promise<Object>} 저장 결과
 */
export async function saveSurveyToSheets(surveyData) {
  // 웹훅 URL이 설정되지 않았으면 에러
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    console.warn('⚠️ Google Sheets webhook URL is not configured.');
    console.warn('📝 Please set VITE_GOOGLE_SHEETS_WEBHOOK_URL in Netlify environment variables.');
    console.warn('📋 Current environment:', import.meta.env.MODE);
    return {
      success: false,
      error: 'Webhook URL not configured'
    };
  }
  
  console.log('📤 Sending survey data to Google Sheets...', {
    url: GOOGLE_SHEETS_WEBHOOK_URL.substring(0, 50) + '...',
    data: surveyData
  });

  try {
    // 추가 메타데이터 수집
    const payload = {
      ...surveyData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      // IP 주소는 서버에서만 얻을 수 있으므로 여기서는 빈 값
      ipAddress: ''
    };

    // Google Apps Script 웹훅으로 POST 요청
    // mode: 'no-cors'는 사용하지 않음 (응답을 읽을 수 없음)
    // Google Apps Script는 기본적으로 CORS를 허용해야 함
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'cors', // 명시적으로 CORS 모드 지정
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Survey data saved successfully to Google Sheets!', result);
      return {
        success: true,
        message: result.message,
        timestamp: result.timestamp
      };
    } else {
      console.error('❌ Google Sheets returned an error:', result);
      throw new Error(result.error || 'Unknown error');
    }
  } catch (error) {
    console.error('❌ Error saving survey data to Google Sheets:', error);
    console.error('🔍 Error details:', {
      message: error.message,
      stack: error.stack,
      url: GOOGLE_SHEETS_WEBHOOK_URL
    });
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * 설문조사 결과를 로컬 스토리지에 백업 저장 (선택사항)
 * @param {Object} surveyData - 설문조사 데이터
 */
export function backupSurveyToLocalStorage(surveyData) {
  try {
    const existingData = JSON.parse(localStorage.getItem('surveyBackup') || '[]');
    existingData.push({
      ...surveyData,
      timestamp: new Date().toISOString()
    });
    
    // 최대 100개까지만 저장
    if (existingData.length > 100) {
      existingData.shift();
    }
    
    localStorage.setItem('surveyBackup', JSON.stringify(existingData));
  } catch (error) {
    console.error('Error backing up survey data to localStorage:', error);
  }
}

