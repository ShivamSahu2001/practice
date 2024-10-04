import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: { //cloudinary url
      type: String,
      required: true,
    },
    thumbnail: { //cloudinary url
      type: String,
      required: true,
    },
    title: { 
      type: String,
      required: true,
    },
    discription: { 
      type: String,
      required: true,
    },
    duration: { //cloudinary url 
      type: Number,
      required: true,
    },
    view: { 
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: { //cloudinary url 
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate); //filtering, sorting, grouping

export const Video = mongoose.model("Video",videoSchema);