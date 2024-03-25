### 1. 여행지 조회 및 선택

- 여행지 검색 기능
    - **Description: 사용자가 키워드를 이용해 여행지 검색.**
    - Method: `GET`
    - Endpoint: **`/destinations/search`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "destinationId": "1",
              "name": "Namsan Seoul Tower",
              "description": "A truly special experience in the heart of Seoul",
              "location": "Seoul, South Korea"
            }
            ```
            
- 여행지 상세 정보 조회
    - **Description: 사용자가 특정 여행지에 대한 상세 정보 조회.**
    - Method: `GET`
    - Endpoint: **`/destinations/{destinationId}/details`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "destinationId": "1",
              "name": "Namsan Seoul Tower",
              "description": "A truly special experience in the heart of Seoul",
              "location": "Seoul, South Korea",
              "images": ["img1", "img2"],
              "openingHours": "10:00 AM - 11:00 PM",
              "tags": ["landmark", "views", "photography"]
            }
            ```
            

### 2. 회원가입 및 로그인

- 회원가입
    - **Description: 새로운 사용자를 시스템에 등록.**
    - Method: `POST`
    - Endpoint: **`/users/signup`**
    - Request Example Body:
        
        ```json
        {
          "username": "sungkyun",
          "password": "qwer1234",
          "email": "sungkyun@gmail.com"
        }
        ```
        
    - Response Example:
        - Status Code: `201 Created`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "User registered successfully."
            }
            ```
            
- 아이디 중복확인
    - **Description: 중복된 아이디 판별.**
    - Method: `GET`
    - Endpoint: **`/users/username`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "isAvailable": true
            }
            ```
            
- 로그인
    - **Description: 사용자가 시스템에 로그인. 성공 시 세션 토큰 반환.**
    - Method: `POST`
    - Endpoint: **`/users/login`**
    - Request Example Body:
        
        ```json
        {
          "username": "sungkyun",
          "password": "qwer1234!@#$"
        }
        ```
        
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Login successful.",
              "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            }
            ```
            
- 로그아웃
    - **Description: 사용자가 시스템에서 로그아웃.**
    - Method: `POST`
    - Endpoint: **`/users/logout`**
    - Response Example:
        - Status Code: `204 No Content`
- 비밀번호 재설정
    - **Description: 사용자가 비밀번호를 잊어버렸을 경우 재설정.**
    - Method: `POST`
    - Endpoint: **`/useers/reset`**
    - Request Example Body:
        
        ```json
        {
          "email": "sungkyun@gmail.com"
        }
        ```
        
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Password reset email sent."
            }
            ```
            
- 회원 정보 수정
    - **Description: 로그인된 사용자가 자신의 정보 수정.**
    - Method: `PUT`
    - Endpoint: **`/users/update`**
    - Request Example Body:
        
        ```json
        {
          "newEmail": "sungkyunkwan@gmail.com",
          "newPassword": "qwer1234!@#$"
        }
        ```
        
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "User information updated successfully."
            }
            ```
            

### 3. 도시 정보 조회

- 도시 지도 정보 조회
    - **Description: 선택된 도시에 대한 지도 API 정보를 반환.**
    - Method: `GET`
    - Endpoint: **`/cities/{cityId}/map`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "cityId": "1",
              "cityName": "Seoul",
              "mapUrl": "https://..."
            }
            ```
            
- 도시 별 커뮤니티 정보
    - **Description: 선택된 도시에 대한 커뮤니티 정보 반환.**
    - Method: `GET`
    - Endpoint: **`/cities/{cityId}/commuinity`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "postId": "1",
              "title": "Best cafes in Seoul",
              "author": "choi",
              "createdAt": "2024-02-03"
            }
            ```
            
- 도시 별 이벤트 정보 조회
    - **Description: 선택된 도시에서 개최되는 이벤트 정보 반환.**
    - Method: `GET`
    - Endpoint: **`/cities/{cityId}/events`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "eventId": "1",
              "eventName": "Seoul Lantern Festival",
              "startDate": "2023-12-15",
              "endDate": "2024-01-21",
              "location": "Cheonggyecheon Stream",
              "description": "An annual event showcasing thousands of lanterns along the stream."
            }
            ```
            
- 마크다운 저장
    - **Description: 사용자가 작성한 마크다운 형식의 글 저장.**
    - Method: `POST`
    - Endpoint: **`/cities/markdown`**
    - Request Example Body:
        
        ```json
        {
          "cityId": "1",
          "title": "My Trip to Seoul",
          "markdownContent": "..."
        }
        ```
        
    - Response Example:
        - Status Code: `201 Created`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Markdown post saved successfully."
            }
            ```
            

### 4. 커뮤니티 관리

- 커뮤니티 게시글 작성
    - **Description: 사용자가 새로운 게시글을 작성.**
    - Method: `POST`
    - Endpoint: **`/community/posts`**
    - Request Example Body:
        
        ```json
        {
          "title": "A trip to Busan",
          "content": "This is the review of a trip to Busan.",
          "tags": ["reivew", "trip"]
        }
        ```
        
    - Response Example:
        - Status Code: `201 Created`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Post created successfully.",
              "postId": "1"
            }
            ```
            
- 커뮤니티 게시글 수정
    - **Description: 사용자가 자신의 게시글 수정.**
    - Method: `PUT`
    - Endpoint: **`/community/posts/{postId}`**
    - Request Example Body:
        
        ```json
        {
          "title": "A trip to Busan!",
          "content": "This is the review of a trip to Busan!"
        }
        ```
        
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Post updated successfully."
            }
            ```
            
- 커뮤니티 게시글 삭제
    - **Description: 사용자가 자신의 게시글 삭제.**
    - Method: `DELETE`
    - Endpoint: **`/community/posts/{postId}`**
    - Response Example:
        - Status Code: `204 No Content`
- 커뮤니티 게시글 조회
    - **Description: 특정 게시글 조회.**
    - Method: `GET`
    - Endpoint: **`/community/posts/{postId}`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "postId": "1",
              "title": "A trip to Busan!",
              "content": "This is the review of a trip to Busan!",
              "author": "han",
              "createdAt": "2024-01-20",
              "likes": 10,
              "dislikes": 2,
              "comments": [
                {
                  "commentId": "1",
                  "author": "choi",
                  "content": "Great post!",
                  "createdAt": "2024-02-02"
                }
              ]
            }
            ```
            
- 커뮤니티 게시글 좋아요/싫어요
    - **Description: 사용자가 게시글에 좋아요 또는 싫어요를 표시.**
    - Method: `POST`
    - Endpoint: **`/community/posts/{postId}/like` or `/community/posts/{postId}/dislike`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Great post!"
            }
            ```
            
- 커뮤니티 댓글 기능
    - **Description: 사용자가 게시글에 댓글을 작성하거나 댓글 조회.**
    - Method: `POST / GET`
    - Endpoint: **`/community/posts/{postId}/comments`**
    - `POST`
        - Request Example Body:
            
            ```json
            {
              "content": "Good!"
            }
            ```
            
        - Response Example:
            - Status Code: `200 OK`
            - Body:
                
                ```json
                {
                  "message": "Comment added successfully."
                }
                ```
                
    - `GET`
        - Response Example:
            - Status Code: `201 Created`
            - Body:
                
                ```json
                {
                  "success": true,
                  "message": "Message sent successfully."
                }
                ```
                
- 프로필 활성화 사용자와 소통
    - **Description: 프로필 활성화 사용자 간 메시지 송수신.**
    - Method: `POST`
    - Endpoint: **`/community/{userId}/messages`**
    - Request Example Body:
        
        ```json
        {
          "receiverId": "choi",
          "message": "Hello, may I ask you a question?"
        }
        ```
        
    - Response Example:
        - Status Code: `201 Created`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Message sent successfully."
            }
            ```
            

### 5. 경로 및 정보 조회

- 최적 경로 조회
    - **Description: 사용자가 지정한 출발지와 목적지 사이의 최적 경로 조회.**
    - Method: `GET`
    - Endpoint: **`/position/route`**
    - Query Parameters:
        - `start`: 출발지 좌표 (e.g. `126.9675222`**, `37.53609444`)**
        - `end`: 목적지 좌표 (e.g. `129.1658083`**, `35.16001944`)**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "route": {
                "steps": [
                  {
                    "instruction": "Head east towards Gyeongbokgung Palace",
                    "distance": "0.5 km",
                    "duration": "10 mins"
                  },
                  {
                    "instruction": "Turn right at the National Folk Museum",
                    "distance": "1.2 km",
                    "duration": "15 mins"
                  }
                ],
                "totalDistance": "1.7 km",
                "totalDuration": "25 mins"
              }
            }
            ```
            
- 사용자 위치 기반 정보 조회
    - **Description: 사용자의 현재 위치를 기반으로 주변의 관심 지점 정보 조회.**
    - Method: `GET`
    - Endpoint: **`/position/information`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "pointsOfInterest": [
                {
                  "name": "Gyeongbokgung Palace",
                  "type": "Historic Site",
                  "distance": "0.4 km"
                },
                {
                  "name": "Bukchon Hanok Village",
                  "type": "Cultural",
                  "distance": "0.6 km"
                }
              ]
            }
            ```
            

### 6. 리뷰 및 평점

- 리뷰 조회
    - **Description: 특별 장소에 대한 모든 리뷰와 평균 평점 조회.**
    - Method: `GET`
    - Endpoint: **`/reviews/{placeId}`**
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "averageRating": 4.2,
              "reviews": [
                {
                  "reviewId": "1",
                  "userId": "han",
                  "rating": 5,
                  "comment": "Fantastic place with breathtaking views!",
                  "createdAt": "2024-01-11"
                },
                {
                  "reviewId": "2",
                  "userId": "choi",
                  "rating": 4,
                  "comment": "Beautiful location but a bit crowded.",
                  "createdAt": "2024-01-21"
                }
              ]
            }
            ```
            
- 리뷰 및 평점 제출
    - **Description: 사용자가 특정 장소에 대한 리뷰와 평점 제출.**
    - Method: `POST`
    - Endpoint: **`/reviews`**
    - Request Example Body:
        
        ```json
        {
          "placeId": "1",
          "rating": 5,
          "comment": "Loved this place! Will definitely visit again."
        }
        ```
        
    - Response Example:
        - Status Code: `201 Created`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Review and rating submitted successfully."
            }
            ```
            
- 리뷰 수정
    - **Description: 사용자가 자신의 리뷰 수정.**
    - Method: `PUT`
    - Endpoint: **`/reviews/{reviewId}`**
    - Request Example Body:
        
        ```json
        {
          "rating": 4,
          "comment": "Had a great time, but it was a bit crowded."
        }
        ```
        
    - Response Example:
        - Status Code: `200 OK`
        - Body:
            
            ```json
            {
              "success": true,
              "message": "Review updated successfully."
            }
            ```
            
- 리뷰 삭제
    - **Description: 사용자가 자신의 리뷰 삭제.**
    - Method: `DELETE`
    - Endpoint: **`/reviews/{reviewId}`**
    - Response Example:
        - Status Code: `204 No Content`
