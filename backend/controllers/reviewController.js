import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ tourId, ...req.body });
  console.log(newReview);

  try {
    const savedReview = await newReview.save();

    //after creating a new review now update the reviews array of the tour
    await Tour.findByIdAndUpdate(
      tourId,
      {
        $push: { reviews: savedReview._id },
        $set: { tourId: tourId }, // save the tourId in the review document as well
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
    });
  }
};

export const getTourReviews = async (req, res) => {
  const tourId = req.params.tourId;

  try {
    const reviews = await Review.find({ tourId });

    res.status(200).json({
      success: true,
      message: "Tour reviews retrieved",
      data: reviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve tour reviews",
    });
  }
};
