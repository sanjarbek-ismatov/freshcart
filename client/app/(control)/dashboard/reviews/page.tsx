"use client";
import { LoadingPage, Typography } from "@components";
import { useGetReviewsQuery } from "@/store/api/ecommerce";
import { ReviewCard } from "@/app/(customer)/(shop)/product/components";

function ReviewsPage() {
  const { isLoading, data } = useGetReviewsQuery();
  return (
    <>
      <Typography text="Izohlar" />
      {isLoading ? (
        <LoadingPage />
      ) : (
        data?.map((e, i) => <ReviewCard key={i} review={e} />)
      )}
    </>
  );
}

export default ReviewsPage;
