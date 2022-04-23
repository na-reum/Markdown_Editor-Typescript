# Markdown Editor 

## 구현 요구사항
- 마크다운을 파싱하는 애플리케이션을 만든다.
- 사용자는 텍스트 영역에 입력한다.
- 텍스트 영역의 내용이 바뀔 떄다 문서 전체를 다 파싱한다.
- 사용자가 엔터 키를 누른 곳을 기준으로 문서를 판단한다.
- '#' 뒤에 공백이 오면  H1 태그로 변경한다.
- '##' 뒤에 공백이 오면 H2 태그로 변경한다.
- '###' 뒤에 공백이 오면 H3 태그로 변경한다. 
- '-----'은 가로줄로 변경한다. 
- 마크다운으로 시작하지 않는 줄은 문단으로 취급한다. 
- 결과 HTML 은 부트스트랩 레이블에 표시된다. 
- 텍스트 영역이 비어있으면 레이블은 빈 문단을 사용한다.
- 레이아웃에 부트스트랩을 사용하고 내용의 높이를 100%로 늘린다.
