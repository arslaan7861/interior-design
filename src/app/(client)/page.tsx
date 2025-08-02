import HeroSection from "@/components/homepage/heroSection";
import FeaturedSection from "@/components/homepage/featuredSection";
import Testimonials from "@/components/homepage/testimonials";
import Projects from "@/components/homepage/projects";
import ContactSection from "@/components/homepage/contact";
import connectDb from "@/server/DB";
import { ITestimonial, TestimonialModel } from "@/server/DB/TestimonialModel";
import { ObjectId } from "mongoose";
import { FurnitureModel, IFurniture } from "@/server/DB/FurnitureModel";
import { IProject, ProjectModel } from "@/server/DB/ProjectModel";
import AboutServices from "@/components/homepage/AboutServices";
export const dynamic = "force-static";
export default async function InteriorDesignWebsite() {
  await connectDb();
  const featuredFurniture = await FurnitureModel.find()
    .sort({ createdAt: -1 }) // Sort by newest first
    .limit(6)
    .lean();

  const furnitures = featuredFurniture.map(
    ({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }
  ) as IFurniture[];
  const dbProjects = await ProjectModel.find().limit(4).lean();
  const projects = dbProjects.map(
    ({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }
  ) as IProject[];
  const dBtestimonials = await TestimonialModel.find().lean();
  const testimonials = dBtestimonials.map(
    ({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }
  ) as ITestimonial[];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <AboutServices />
      {/* Featured Furniture */}
      <FeaturedSection furnitures={furnitures} />
      {/* Projects Showcase */}
      <Projects projects={projects} />
      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
