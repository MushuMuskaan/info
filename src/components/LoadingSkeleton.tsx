import React from "react";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "article" | "text" | "avatar" | "button" | "card";
  count?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = "",
  variant = "text",
  count = 1,
}) => {
  const getSkeletonClass = () => {
    const baseClass = "animate-pulse bg-gray-200 rounded";
    
    switch (variant) {
      case "article":
        return `${baseClass} h-48 w-full mb-4`;
      case "text":
        return `${baseClass} h-4 w-full mb-2`;
      case "avatar":
        return `${baseClass} h-10 w-10 rounded-full`;
      case "button":
        return `${baseClass} h-10 w-24`;
      case "card":
        return `${baseClass} h-64 w-full`;
      default:
        return `${baseClass} h-4 w-full`;
    }
  };

  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className={`${getSkeletonClass()} ${className}`} />
  ));

  return <>{skeletons}</>;
};

// Specific skeleton components for common use cases
export const ArticleCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200" />
    <div className="p-6">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="h-3 bg-gray-200 rounded w-full mb-2" />
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-4" />
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-gray-200 rounded-full" />
        <div className="h-3 bg-gray-200 rounded w-20" />
      </div>
    </div>
  </div>
);

export const FeaturedArticleSkeleton: React.FC = () => (
  <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-6 left-6 right-6">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 bg-gray-300 rounded-full" />
        <div className="h-3 bg-gray-300 rounded w-16" />
      </div>
    </div>
  </div>
);

export const CategorySkeleton: React.FC = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    {Array.from({ length: 6 }, (_, index) => (
      <div
        key={index}
        className="h-8 bg-gray-200 rounded-full animate-pulse"
        style={{ width: `${Math.random() * 60 + 60}px` }}
      />
    ))}
  </div>
);

export const SearchResultSkeleton: React.FC = () => (
  <div className="p-4 border-b border-gray-100 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-full mb-1" />
    <div className="h-3 bg-gray-200 rounded w-2/3 mb-2" />
    <div className="flex items-center space-x-2">
      <div className="h-3 bg-gray-200 rounded w-16" />
      <div className="h-3 bg-gray-200 rounded w-20" />
    </div>
  </div>
);
