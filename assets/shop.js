/* PITBOT 판매 정보. 요금·얼리버드·출시일은 여기만 고치면 홈과 예약 페이지에 함께 반영됩니다.
   금액 근거는 PITBOT/가격_근거.md에 있습니다. */
window.SHOP=(function(){
  const S={
    earlyEnd:'2026-12-31T23:59:59+09:00', /* 이 시각이 지나면 자동으로 정가로 바뀝니다 */
    launch:'2027-01-05T00:00:00+09:00',
    launchLabel:'2027년 1월 5일',
    zone:{month:19000,yearList:180000,yearEarly:144000,limit:'선착순 1,000명'},
    home:{list:149000,early:129000,months:48,deposit:100000,people:4,limit:'선착순 100가구'},
    biz:{list:890000,early:690000,earlyMonths:12,months:36,deposit:300000,share:.3,limit:'선착순 30곳'},
    wear:129000,            /* WEAR 패키지(POD 포함) */
    capacity:45             /* 하루 12시간, 1인 1시간, 회원당 월 8회 기준 PIT 1대 회원 수 */
  };
  S.isEarly=()=>Date.now()<new Date(S.earlyEnd).getTime();
  S.isPre=()=>Date.now()<new Date(S.launch).getTime();
  S.won=n=>'₩'+Math.round(n).toLocaleString('ko-KR');
  S.zoneYear=()=>S.isEarly()?S.zone.yearEarly:S.zone.yearList;
  S.homePrice=()=>S.isEarly()?S.home.early:S.home.list;
  S.bizPrice=()=>S.isEarly()?S.biz.early:S.biz.list;
  /* 운영자 배분: 회원 월간 구독료에서 부가세를 뺀 금액의 30% */
  S.bizShare=n=>S.zone.month/1.1*S.biz.share*n;
  S.left=()=>{ const t=Math.max(0,new Date(S.earlyEnd).getTime()-Date.now()), p=n=>String(n).padStart(2,'0');
    const d=Math.floor(t/864e5),h=Math.floor(t/36e5)%24,m=Math.floor(t/6e4)%60,s=Math.floor(t/1e3)%60;
    return `${d}일 ${p(h)}:${p(m)}:${p(s)}`; };
  return S;
})();
