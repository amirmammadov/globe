import "../../sass/scenes/_reviews.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/autoplay";

import { reviews } from "../../data/reviews";

import SectionTitle from "../../components/SectionTitle";
import ReviewCard from "../../components/ReviewCard";

import { useTranslation } from "react-i18next";

const Reviews = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="landing__reviews">
      <SectionTitle
        title={t("landing.plans.title")}
        desc={t("landing.plans.desc")}
        btnText={t("landing.plans.btn")}
        link="result"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={48}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={10000}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="landing__reviews__content"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
