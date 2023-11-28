create table customer(
custid char(10) primary key,
custname varchar(10) not null,
addr char(10) not null,
phone char(11),
birth date);

 desc customer;
 
INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01'); 

-- select문 조회
select * from customer;
select custid from customer;

-- <where 조건>
-- 비교: =, <>, <, <=, >=
-- 범위 : between
-- 집합 : in, not in
-- 패턴: like
-- null: is null, is not null
-- 복합 조건: and, or, not

create table customer(
custid char(10) primary key,
custname varchar(10) not null,
addr char(10) not null,
phone char(11),
birth date);

 desc customer;
 
INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01'); 

-- select문 조회
select * from customer;
select custid from customer;

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
select birth from customer where custid = '강해린';
-- 고객이름이 강해린이 아닌 고객의 생일 검색
   select birth from customer where custid != '강해린';
   -- 사전 순으로 박민지보다 뒤에 위치한고객의 모든 정보 검색
select * from customer where custname > '박민지';

-- 범위
-- 1995 년 이상 2000년 이하 출생 고객 검색
select * from customer where birth between '1995-01-01' and '2000-12-31';

-- 집합
-- 주소가 서울이거나 런던인 고객 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
SELECT * FROM customer WHERE addr LIKE '%서울' OR addr LIKE '%런던';
SELECT * FROM customer WHERE addr LIKE '대한민국 서울' OR addr LIKE '영국 런던';

-- 패턴

-- 고객 이름에 두번쨰 글자가 '지'인ㄴ고객 검색
-- _: 임의의 한글자(하나의) 문자를 의미
select * from customer where custname like "_지_"; -- 김지민
select * from customer where custname like "__지"; -- 김민지
select * from customer where custname like "수%"; -- 수로시작하는
select * from customer where custname like "%수"; -- 수로끝나는
select * from customer where custname like "%수%"; -- 수를 포함하는

select * from customer where addr like "%대한민국%" and birth >= '2000-01-01';

select * from customer where addr like "%미국%" or addr like "%영국%";

select * from customer where phone not like "%4"



