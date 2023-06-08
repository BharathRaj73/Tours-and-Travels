import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "We assist travelers in planning their trips effectively using advanced forecasting techniques.This enables you to synchronize the weather forecast with your itinerary, helping you make adjustments to your schedule if needed. ",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "The service is designed to enhance your travel experience by offering knowledgeable and professional guides who are experts in their respective destinations and provide valuable insights, historical context, and local perspectives",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "The service provided allows you to personalize your travel experience according to your preferences, interests, and requirements. It offers flexibility in selecting activities, accommodations, transportation options, and more. ",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
