export interface destinationsSearch {
  destinationId: number | string;
  name: string;
  description: string;
  location: string;
}

export interface destinationId {
  destinationId: number | string;
  name: string;
  description: string;
  location: string;
  images: string[];
  openingHours: string;
  tags: string[];
}

export interface userInfo {
  username: string;
  password: string;
  email: string;
}

export interface cityLocation {
  cityId: string | number;
  cityName: string;
  mapUrl: string;
}

export interface cityEvent {
  eventId: string | number;
  eventName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface cityReport {
  cityId: string | number;
  title: string;
  markdownContent: string;
}

export interface communityContent {
  title: string;
  contnet: string;
  tags?: string[]; // 게시글 수정시 null
}

export interface searchCommunityContent {
  postId: string | number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  comments: comment[];
}

export interface comment {
  commentId: string | number;
  author: string;
  content: string;
  createdAt: string;
}

export interface searchRoute {
  route: route;
}

export interface route {
  steps: step[];
  totalDistance: string;
  totalDuration: string;
}

export interface step {
  instruction: string;
  distance: string;
  duration: string;
}

export interface searchReview {
  averageRating: string | number;
  reviews: review[];
}

export interface review {
  reviewId: string | number;
  userId: string;
  rating: '1' | '2' | '3' | '4' | '5';
  comment: string;
  createdAt: string;
}

export interface aboutReview {
  // 리뷰 제출 및 수정
  placeId?: string | number;
  rating: '1' | '2' | '3' | '4' | '5';
  comment: string;
}
