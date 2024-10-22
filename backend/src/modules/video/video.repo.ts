import { VideoEntity } from './video.entity';
// import { Genres, Grades, Statuses, Types } from '../../common/enums/video.enum';

export const VideoInjectSymbol = Symbol('VideoRepo');

export interface VideoRepo {
  createVideo(video: Omit<VideoEntity, 'id' | 'person'>): Promise<VideoEntity>;

  findVideoById(id: number): Promise<VideoEntity>;

  // patchVideo(
  //   id: number,
  //   title?: string,
  //   person?: string,
  //   personId?: number,
  //   type?: Types,
  //   status?: Statuses,
  //   genre?: Genres,
  //   grade?: Grades,
  // ): Promise<VideoEntity>;

  deleteVideo(id: number): Promise<void>;

  getAllVideos(): Promise<VideoEntity[]>;
}
