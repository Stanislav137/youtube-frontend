export interface Video {
  videoId: number;
  title: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  uploadDate: string;
}

export interface AddNewVideo {
  title: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface UpdateVideo {
  title: string;
  thumbnailUrl: string;
}

export interface ResponseData {
  status: any;
}
