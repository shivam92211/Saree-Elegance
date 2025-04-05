"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getTypes, getOccasions, getColors, SareeType, SareeOccasion, SareeColor } from "@/lib/data";

const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const currentType = searchParams.get("type") as SareeType | null;
  const currentOccasion = searchParams.get("occasion") as SareeOccasion | null;
  const currentColor = searchParams.get("color") as SareeColor | null;
  
  const types = getTypes();
  const occasions = getOccasions();
  const colors = getColors();

  const applyFilter = (
    filterType: "type" | "occasion" | "color",
    value: string | null
  ) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(filterType, value);
    } else {
      params.delete(filterType);
    }
    router.push(`/products?${params.toString()}`);
  };

  const clearAllFilters = () => {
    router.push("/products");
  };

  const hasActiveFilters = currentType || currentOccasion || currentColor;

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between md:hidden">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
        
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-saree-primary"
            onClick={clearAllFilters}
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {currentType && (
            <Badge 
              variant="type" 
              className="flex items-center gap-1 pr-1"
            >
              {types.find(t => t.value === currentType)?.label}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => applyFilter("type", null)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove type filter</span>
              </Button>
            </Badge>
          )}
          
          {currentOccasion && (
            <Badge 
              variant="occasion" 
              className="flex items-center gap-1 pr-1"
            >
              {occasions.find(o => o.value === currentOccasion)?.label}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0 hover:bg-transparent text-white"
                onClick={() => applyFilter("occasion", null)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove occasion filter</span>
              </Button>
            </Badge>
          )}
          
          {currentColor && (
            <Badge 
              variant="color" 
              className="flex items-center gap-1 pr-1"
            >
              {colors.find(c => c.value === currentColor)?.label}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => applyFilter("color", null)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove color filter</span>
              </Button>
            </Badge>
          )}
        </div>
      )}

      {/* Filter Sidebar - Mobile */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-3/4 max-w-xs flex-col overflow-y-auto bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsFilterOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Filter Sections */}
            <div className="space-y-6">
              {/* Type Filter */}
              <div>
                <h3 className="font-medium mb-2">Type</h3>
                <div className="space-y-2">
                  {types.map((type) => (
                    <button
                      key={type.value}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${
                        currentType === type.value
                          ? "bg-saree-primary text-white"
                          : "hover:bg-saree-light"
                      }`}
                      onClick={() => {
                        applyFilter("type", type.value);
                        setIsFilterOpen(false);
                      }}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Occasion Filter */}
              <div>
                <h3 className="font-medium mb-2">Occasion</h3>
                <div className="space-y-2">
                  {occasions.map((occasion) => (
                    <button
                      key={occasion.value}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${
                        currentOccasion === occasion.value
                          ? "bg-saree-secondary text-white"
                          : "hover:bg-saree-light"
                      }`}
                      onClick={() => {
                        applyFilter("occasion", occasion.value);
                        setIsFilterOpen(false);
                      }}
                    >
                      {occasion.label}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Color Filter */}
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${
                        currentColor === color.value
                          ? "bg-saree-light text-saree-dark border-l-4 border-saree-primary"
                          : "hover:bg-saree-light"
                      }`}
                      onClick={() => {
                        applyFilter("color", color.value);
                        setIsFilterOpen(false);
                      }}
                    >
                      {color.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    clearAllFilters();
                    setIsFilterOpen(false);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden md:block mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium">Filter Products</h2>
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-saree-primary"
              onClick={clearAllFilters}
            >
              Clear All
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-4">
          {/* Type Filter */}
          <div className="mb-4 w-full md:w-auto">
            <h3 className="text-sm font-medium mb-2">Type</h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge
                  key={type.value}
                  variant={currentType === type.value ? "type" : "outline"}
                  className="cursor-pointer"
                  onClick={() => applyFilter("type", currentType === type.value ? null : type.value)}
                >
                  {type.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Occasion Filter */}
          <div className="mb-4 w-full md:w-auto">
            <h3 className="text-sm font-medium mb-2">Occasion</h3>
            <div className="flex flex-wrap gap-2">
              {occasions.map((occasion) => (
                <Badge
                  key={occasion.value}
                  variant={currentOccasion === occasion.value ? "occasion" : "outline"}
                  className="cursor-pointer"
                  onClick={() => applyFilter("occasion", currentOccasion === occasion.value ? null : occasion.value)}
                >
                  {occasion.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-4 w-full md:w-auto">
            <h3 className="text-sm font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Badge
                  key={color.value}
                  variant={currentColor === color.value ? "color" : "outline"}
                  className="cursor-pointer"
                  onClick={() => applyFilter("color", currentColor === color.value ? null : color.value)}
                >
                  {color.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
