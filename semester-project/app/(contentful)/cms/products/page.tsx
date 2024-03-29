import { SearchParams } from "@/app/feedback/page";
import { BadgeProps, Badge } from "@/components/ui/badge";
import React from 'react';
import HeroImage from './HeroImage';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
//import CategoryFilter from "../_components/CategoryFilter";
import { FC, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode } from "react";
import { TypeProductListItem } from "../../types/TypeProduct";
import Image from "next/image";
import { cn } from "@/lib/utils";
//import { products, categories } from "./productList";
import contentfulService from "@/lib/contentfulClient";
/*
export interface HeroImageProps {
  productName: string;
  image?: string;
  className?: string;
}

export const HeroImage = ({
  image,
  productName,
  className,
}: HeroImageProps) => {
  if (!image) return null;

  return (
    <div className={cn("relative w-96 h-60", className)}>
      <Image
        src={image}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-md hover:opacity-70"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        alt={productName || "product"}
      />
    </div>
  );
};
*/
const ProductCard: FC<TypeProductListItem> = ({
  name,
  description,
  image,
  id,
  category,
}) => (
  <Card className="w-fit">
    <CardHeader>
      <CardTitle className="text-brand-special-100 font-tahoma font-bold">{name}</CardTitle>
      <CardDescription className="text-brand-blue-300 font-tahoma">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Link href={`products/${id}`}>
        <div className="relative w-48 h-32 sm:w-64 sm:h-48 lg:w-96 lg:h-64">
          <Image
            src={image}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md hover:opacity-70"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt={name}
          />
        </div>
      </Link>
    </CardContent>
    <CardFooter>
      {category?.map((category: { label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; }) => (
        <Badge variant={category?.label as BadgeProps["variant"]} key={id}>
          {category?.label}
        </Badge>
      ))}
    </CardFooter>
  </Card>
);

const CmsPage: FC<SearchParams> = async ({ searchParams }) => {
  const products = await contentfulService.getAllProducts();
  //const categories = await contentfulService.getAllCategories();
  
  const filteredProducts = searchParams._category
    ? products.filter((product) => {
        return product.category?.some((category) => {
          return category.label === searchParams._category;
        });
      })
    : products;
  
  return (
    <main className="container flex flex-col items-center gap-10 pt-8 pb-24">
      <h1 className="text-center mt-5 mb-5 mr-2 ml-2 font-tahoma font-bold text-brand-special-100 text-2xl md:text-4xl">
        Check out some available products that match your desires!
      </h1>
      <HeroImage productName={""} /> {/* Use HeroImage component here */}
      <ul className="grid md:grid-cols-2 gap-8">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CmsPage;