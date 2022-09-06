# 회원 정보 내용을 포함하는 테이블으 설계하고 다음고 같은 기능으 제공하느 서버 개발

###데이터
- 회원정보
  - 고객명, 회원등급, 성별, 나이, 연락처, 가입일, 마지마 접속일
  
- REST API 기능
  - 공지사항, 자유게시파, 운영 게시판
  - 회원 등급에 따르 게시파 기능 접근 제어
  - 회원가입, 로그인, 회원탈퇴
  - 이용 통계집계(남여 별, 나이 별, 접속 시간별)

- 개발 조건
  - DB는 RDB 사용해야 합니다.
  - 요구사항에 맞게 자유롭게 개발
  - 전체기능을 완성하지 못해도 괜찮습니다.
  - 통계가 다양할 수록 좋습니다.
  
- 평가 항목
 - API 정상동작 여부
 - 일저 준수
 - 코딩 컨벤션
 - 코드 패키지 구조
 - 비즈니스 로직
 - 확장과 성능을 고려한 개발
  
##API

| 분류 | 기능 | 조건 | URI(API) | Method | 
|:---|:--- |:----|:----|:----|
| 유저관리 | 회원가입 | 없음 | /user | POST |
| 유저관리 | 회원탈퇴 | 없음 | /user | DELETE |
| 유저관리 | 로그인 | 없음 | /users/login | POST |
| 유저관리 | 로그아웃 | 없음 | /users/logout | POST |
| 공지사항 | 전체조회 | 관리자 | /noticeboards/ | GET 
| 공지사항 | 작성 | 관리자 | /noticeboar\s/ | POST |
| 공지사항 | 수정 | 관리자 | /noticeboards/ | PUT |
| 공지사항 | 삭제 | 없음 | /noticeboards/ | DELETE |
| 자유게시판 | 전체조회| 관리자, 골드, 실버 | /generalboards/ | GET |
| 자유게시판 | 작성 | 관리자, 골드, 실버 |/generalboards/ | POST |
| 자유게시판 | 수정 | 관리자, 골드, 실버 | /generalboards/ | PUT |
| 자유게시판 | 삭제 | 관리자, 골드, 실버 | /generalboards/ | DELETE |
| 운영게시판 | 전체조회 | 관리자, 골드, 실버 | /operationboards/ | GET |
| 운영게시판 | 작성 | 관리자, 골드 | /operationboards/ | POST |
| 운영게시판 | 수정 | 관리자, 골드 | /operationboards/ | PUT |
| 운영게시판 | 삭제 | 관리자, 골드 | /operationboards/ | DELETE |
| 통계 | 전체통계(모든 사용자 조회) | 관리자 | /users/login | GET |
| 통계 | 성별 통계 | 관리자 |/stastics/  GET|
| 통계 | 나이 통계 | 관리자 | /stastics/ages | GET |
| 통계 | 접속시간 통계 | 관리자 | /stastics/connect | GET|


