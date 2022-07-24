import {  Video, VideoModel } from "./video.module";

export function createVideo({ owner }: { owner: string }) {
  return VideoModel.create({ owner });
}

export function findVideo(videoId:Video['videoId']) {
  return VideoModel.findOne({videoId})
}

export function finadAllVideos() {
  return VideoModel.find({
    published: true,
    
  }).lean();
}