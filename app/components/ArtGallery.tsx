"use client"

import { useState, useEffect } from "react";
const ArtGallery = () => {
  const [artItems, setArtItems] = useState([])
  const [visibleItems, setVisibleItems] = useState(4)

  const fetchArtItems = async () => {
    try {
      const response = await fetch("/api/gallery")
      if(response.ok) {
        const data = await response.json()
        setArtItems(data)
      } else {
        console.error("Failed to fetch art")
      }
    } catch (error) {
      console.error(error)
    }
  };


  useEffect(() => {
    fetchArtItems()
  }, [fetchArtItems])

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) =>
    prevVisibleItems + 4)
  }
  return (
    <div>
      {artItems.slice(0, visibleItems).map((item: { id: number, imageUrl: string, description: string }) => (
        <div key={item.id} className="flex flex-col">
          <img src={item.imageUrl} 
          alt={item.description} className="w-[600px]" />
          <p>{item.description}</p>
        </div>
      ))}
      {visibleItems <artItems.length && (
        <button className="bg-blue-300 text-white px-4 py-2 mt-4 
        rounded-sm" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  )
}

export default ArtGallery;