import mongoose from 'mongoose';

const lisitngSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // regularPrice: {
    //   type: Number,
    //   required: true,
    // },
    // discountPrice: {
    //   type: Number,
    //   required: false,
    // },
    // type: {
    //   type: String,
    //   required: true,
    // },
    // offer: {
    //   type: Boolean,
    //   default: false,
    //   required: true,
    // },
    // author: {
    //   type: String,
    //   required: true,
    // },
    // published: {
    //   type: Boolean,
    //   default: false,
    //   required: true,
    // },
    // BooksQuantity: {
    //   type: Number,
    //   default: 0,
    //   required: true,
    // },
    // Pages: {
    //   type: Number,
    //   default: 0,
    //   required: false,
    // },
    // Chapters: {
    //   type: Number,
    //   default: 0,
    //   required: false,
    // },
    location: {
      type: String,
      required: true,
    },
    organizer_name: {
      type: String,
      required: true,
    },
    sponsers_detail: {
      type: String,
      required: false,
    },
    organizational_detail: {
      type: String,
      required: false,
    },
    ticketfee: {
      type: Number,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', lisitngSchema);

export default Listing;
