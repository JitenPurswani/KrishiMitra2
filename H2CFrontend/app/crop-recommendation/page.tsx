"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Info } from "lucide-react"

export default function CropRecommendation() {
  const [location, setLocation] = useState("")
  const [selectedSoilType, setSelectedSoilType] = useState<string | null>(null)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [showMarketAnalysis, setShowMarketAnalysis] = useState(false)

  // Soil types with images
  const soilTypes = [
    { id: "clay", name: "Clay Soil", image: "/placeholder.svg?height=120&width=120" },
    { id: "sandy", name: "Sandy Soil", image: "/placeholder.svg?height=120&width=120" },
    { id: "loamy", name: "Loamy Soil", image: "/placeholder.svg?height=120&width=120" },
    { id: "silty", name: "Silty Soil", image: "/placeholder.svg?height=120&width=120" },
  ]

  // Mock crop recommendations
  const recommendedCrops = [
    { name: "Wheat", suitability: "High", profitability: "Medium" },
    { name: "Maize", suitability: "High", profitability: "High" },
    { name: "Soybean", suitability: "Medium", profitability: "High" },
  ]

  // Mock AI explanation
  const aiExplanation = `Based on the ${selectedSoilType || "selected"} soil type and your location, these crops are recommended because:
  
  1. They are well-adapted to your soil conditions
  2. The climate in your region is favorable for their growth
  3. These crops have historically performed well in similar conditions
  4. They require minimal soil amendments for optimal growth
  
  The ${selectedSoilType || "selected"} soil provides good drainage and nutrient retention properties that these crops prefer.`

  // Mock market analysis
  const marketAnalysis = {
    trends: [
      { crop: "Wheat", price: "₹2,100/quintal", trend: "Stable", forecast: "Slight increase expected in 3 months" },
      { crop: "Maize", price: "₹1,850/quintal", trend: "Rising", forecast: "Continued price rise expected" },
      { crop: "Soybean", price: "₹3,900/quintal", trend: "Rising", forecast: "Peak expected in 2 months" },
    ],
    insights:
      "Current market conditions favor maize and soybean cultivation due to increasing demand and limited supply. Wheat prices are stable but expected to rise slightly in the coming months due to export opportunities.",
  }

  const handleGetRecommendations = () => {
    if (!location || !selectedSoilType) {
      alert("Please enter your location and select a soil type")
      return
    }
    setShowRecommendations(true)
    setShowMarketAnalysis(false)
  }

  const handleGetMarketAnalysis = () => {
    setShowMarketAnalysis(true)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Crop Recommendation</h1>

      <div className="space-y-8">
        {/* Location Input */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-lg font-medium">
            Location
          </Label>
          <Input
            id="location"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="max-w-xl"
          />
        </div>

        {/* Soil Type Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-medium">Soil Type</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {soilTypes.map((soil) => (
              <div
                key={soil.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md text-center ${
                  selectedSoilType === soil.id ? "border-primary border-2 bg-primary/5" : ""
                }`}
                onClick={() => setSelectedSoilType(soil.id)}
              >
                <div className="flex justify-center mb-2">
                  <img
                    src={soil.image || "/placeholder.svg"}
                    alt={soil.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                <p className="font-medium">{soil.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Recommendations Button */}
        <div className="flex justify-center">
          <Button size="lg" onClick={handleGetRecommendations} className="px-8">
            Get Crop Recommendations
          </Button>
        </div>

        {/* Recommendations and Explanation */}
        {showRecommendations && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recommended Crops */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Recommended Crops</h2>
                  <div className="space-y-4">
                    {recommendedCrops.map((crop, index) => (
                      <div key={index} className="border-b pb-3 last:border-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-lg">{crop.name}</h3>
                          <div className="flex space-x-2">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              Suitability: {crop.suitability}
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              Profitability: {crop.profitability}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Explanation */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 mr-2 text-primary" />
                    AI Explanation
                  </h2>
                  <p className="whitespace-pre-line text-muted-foreground">{aiExplanation}</p>
                </CardContent>
              </Card>
            </div>

            {/* Get Market Analysis Button */}
            <div className="flex justify-center">
              <Button variant="outline" size="lg" onClick={handleGetMarketAnalysis} className="px-8">
                <BarChart3 className="mr-2 h-5 w-5" />
                Get Market Analysis
              </Button>
            </div>

            {/* Market Analysis */}
            {showMarketAnalysis && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Market Analysis</h2>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left p-3 border">Crop</th>
                          <th className="text-left p-3 border">Current Price</th>
                          <th className="text-left p-3 border">Market Trend</th>
                          <th className="text-left p-3 border">Forecast</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marketAnalysis.trends.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                            <td className="p-3 border font-medium">{item.crop}</td>
                            <td className="p-3 border">{item.price}</td>
                            <td className="p-3 border">
                              <span
                                className={`px-2 py-1 rounded text-xs ${
                                  item.trend === "Rising"
                                    ? "bg-green-100 text-green-800"
                                    : item.trend === "Falling"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {item.trend}
                              </span>
                            </td>
                            <td className="p-3 border">{item.forecast}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Market Insights</h3>
                    <p className="text-muted-foreground">{marketAnalysis.insights}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

