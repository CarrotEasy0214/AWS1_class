# EC2

- Elastic Compute Cloud

## DNS

- Domain Name System
- 주소에 쓰는 IP 주소가 아닌 영어로 된 이름을 뜻함
- DNS는 영어로 된 주소로 접근 시 IP 주소로 연결해준다.

### 최상위 도메인

- www.naver.com
  - com << 최상위 도메인
  - Naver라는 회사가 갖고있는 최상위 도메인 : naver.com

## Instance 유형 (type)

- t2.micro : 앞으로 우리가 사용하게 될 인스턴스 종류
- CPU, RAM 등 컴퓨터의 물리적 성능에 대해서 종류를 나눠둔 것

## VPC ID

- vpc-05f4aa6cdbac2f1fb
- Virtual Private Cloud ID
- AWS에서 우리가 다루는 영역에 있어서 가장 최상위 (프로그램적 의미의 최상위)
- 물리적으로 봤을때 가장 아래
- 우리가 서버를 만들려고한다면 그에 따른 컴퓨터가 필요한데 어디에 속해져있는지 << VPC
  - 단순한 용랑, CPU, RAM, .. 등 포함됨
- 외부에서 접근할 때 가장 먼저 접근하게 되는 영역

## 서브넷 ID

- VPC 내의 영역
- Private && Public

## End Point

- 서버 목적지

## 플랫폼 세부 정보

- Linux/UNIX

## AMI 이름

- Amazon Machine Image
  - image : ISO(CD 데몬 이미지 )
- 아마존에서 서비스하는 플랫폼에 대한 설정을 맞춰둔 이미지들 모음
- Window
  - Window 10,11 등 운영체제
- 서버에 대한 기본 설치 등을 모두 포함한 OS의 압축

## 시작 시 할당 된 키 페어

- home
- 접근시 필요한 암회화 된 파일
- 없으면 접근 불가능하다
- 윈도우, 맥 리셋하면서 키 파일을 삭제하면 접근 및 수정이 아예 불가능하다.
  - 웹상에서는 접근이 가능함 (직접적인 파일 수정가능여부는 확인해야함 )

# 연결 (접근 || 접속)

# Ubuntu NginX 기본 세팅

```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install nginx

```

# NginX 세팅

```bash
cd /etc/nginx
ls -al
sudo vi nginx.conf
```

- nginx.conf

```nginx
http{ # http 통신을 받았을 때 어떻게 처리한건지 설정한다.

    include /etc/nginx/sites-enalbed/*; # 설정 파일을 가져와서 사용한다.

}
```

```nginx
server{

}
```

- 설정파일을 확인하기

```bash
cd sites-available/
ls -al
sudo vi default
```

```nginx
server{
    listen 80 default_server;
    # IPv4 80 port로 서버를 열어달라. app.listen()
    listen [::]:
    # IPv6 80 port로 서버를 열어달라.

    root /var/www/html 폴더이다.
    # root 폴더는 /var/www/html 폴더이다.
    # 아무 설정 없을 시 /var/www/html/폴더로 접근된다.

    index index.html index.htm index.nginx-debian.html;
    # 파일 이름이 없이 폴더로만 접근했을때
    # 이름 그대로의
}
```

# 웹페이지 배포

```bash
cd /var/www
la -al
```

- drwxr-xr-x <<확인됨
- ubuntu 계정에 대해서 쓰기 권한이 업음

```bash
sudo chmod 777 -R html
```

- drwxrwxrwx << 권환 변경됨을 확인
- filezilla에서 파일 이동

## 도메인 설정

- 원하는 도메인 이름 / 인스턴스 아이피 주소
- '원하는 도메인 이름'.errorcode.help

# SSL(HTTPS) 적용하기

```bash
sudo service nginx restart
```

## certbot

- ssl 인증 받기

```bash
sudo apt-get install certbot python3-certbot-nginx
```

- certbot : SSL 인증 프로그램
- python3-certbot-nginx : nginx, certbot 용 확장 프로그램

### 인증 받기

```bash
sudo certbot --nginx
```

```bash
Enter email address : 인증이 끝났거나 뭔가 문제가 생겼을 때 연락받을 이메일
```
