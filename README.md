# 독립문체육관 정적 홈페이지 (검색 노출용)

Instinct Files 페이지(https://files.instinct.com/z659putgey3v, gen 25)를 일반 정적 HTML로 옮긴 것.
구 버전(9페이지 단일 구조)을 대체하는 지점별 구조: 랜딩 + 지점별 하위 페이지.
검색엔진 색인 가능: noindex 없음, 페이지별 title/description/canonical, Open Graph,
지점별 구조화 데이터(ExerciseGym 지점당 1개 + 지점 FAQ 페이지에 FAQPage), sitemap.xml, robots.txt 포함.
문체: 전체 입니다체. 표 제목·버튼·정보 항목은 비문장 그대로.

확정 도메인: dongnimmungym.com — 모든 canonical/og/JSON-LD/sitemap은 https://dongnimmungym.com 기준.

## 구조
- index.html (랜딩: 지점 선택)
- b1/ 독립문1호점: 소개(index), programs/, pricing/, trainers/, reviews/, faq/, contact/, blog/
- b2/ 홍제2호점: 소개(index), pricing/, trainers/, reviews/, faq/, contact/, blog/ (프로그램 페이지 없음 — gen 25와 동일)
- photos/ (사진), style.css, script.js (모바일 메뉴·랜딩 예약 버튼 토글)
- sitemap.xml (16개 URL), robots.txt, 404.html

## 배포 (GitHub Pages 기준, 무료)
1. github.com에서 계정 생성 → 새 public 저장소(예: dongnimmungym) 생성
2. 이 폴더의 파일 전부 업로드 (또는 git push)
3. 저장소 Settings > Pages > Branch: main /(root) 선택
4. Settings > Pages > Custom domain에 dongnimmungym.com 입력 → 가비아 DNS 설정:
   - apex A 레코드 4개: 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
   - www CNAME → <깃허브사용자명>.github.io (www로 접속해도 apex canonical로 통일됨)
5. HTTPS 적용 체크 (인증서 자동 발급, 최대 24시간)

## 도메인 바꾸게 되면
파일 안의 `https://dongnimmungym.com` 을 새 도메인으로 일괄 교체 (canonical, og:url,
og:image, JSON-LD url/@id, sitemap.xml, robots.txt).

## 검색 등록 (배포 후)
- 네이버 서치어드바이저(searchadvisor.naver.com): 사이트 추가 → HTML 파일 업로드 또는 메타태그로 소유확인 → sitemap.xml 제출
- 구글 서치콘솔(search.google.com/search-console): URL 접두어 등록 → HTML 태그로 소유확인 → sitemap 제출
- 반영까지 며칠~몇 주 소요

## 확인 필요 항목 (공개 전)
- 독립문1호점 헬스 6개월 369,000원: 현재 판매 상품인지 미확인 상태로 포함됨 (가격 페이지 + FAQ 답변)
- 독립문1호점 17시 이전 입장권 표: 전단지 초안 기준, 현재 판매 여부 확인 필요
- 홍제2호점에 6종 프로그램 티켓을 보여줄지 여부: 미확인이라 gen 25와 같이 홍제 프로그램 페이지는 없음
