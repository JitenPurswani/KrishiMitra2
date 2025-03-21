"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { MessageCircle, ThumbsUp, ThumbsDown, BarChart3 } from "lucide-react"

export default function CropRecommendation() {
  const [formData, setFormData] = useState({
    soilType: "",
    location: "",
    season: "",
    rainfall: 50,
    temperature: 25,
    previousCrop: "",
    farmSize: "",
  })

  const [results, setResults] = useState<null | {
    crops: Array<{
      name: string
      score: number
      profitability: number
      waterRequirement: number
      growthPeriod: string
      description: string
    }>
  }>(null)

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate AI recommendation (in a real app, this would call an API)
    const mockResults = {
      crops: [
        {
          name: "Wheat",
          score: 92,
          profitability: 85,
          waterRequirement: 60,
          growthPeriod: "110-130 days",
          description:
            "Wheat thrives in your soil conditions and climate. With moderate water requirements and good market demand, it's an excellent choice for your farm.",
        },
        {
          name: "Maize",
          score: 87,
          profitability: 80,
          waterRequirement: 70,
          growthPeriod: "90-120 days",
          description:
            "Maize is well-suited to your farm conditions. It has a shorter growth period than wheat and can be harvested earlier.",
        },
        {
          name: "Soybean",
          score: 78,
          profitability: 75,
          waterRequirement: 50,
          growthPeriod: "100-120 days",
          description:
            "Soybeans are a good option for crop rotation after your previous crop. They help fix nitrogen in the soil and have good market value.",
        },
      ],
    }

    setResults(mockResults)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Crop Recommendation</h1>
      <p className="text-muted-foreground mb-8">
        Get personalized crop suggestions based on your farm conditions and location
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Farm Details</CardTitle>
            <CardDescription>Enter your farm details to get accurate crop recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Select
                  value={formData.soilType}
                  onValueChange={(value) => handleInputChange("soilType", value)}
                  required
                >
                  <SelectTrigger id="soilType">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="silty">Silty</SelectItem>
                    <SelectItem value="peaty">Peaty</SelectItem>
                    <SelectItem value="chalky">Chalky</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="season">Growing Season</Label>
                <Select value={formData.season} onValueChange={(value) => handleInputChange("season", value)} required>
                  <SelectTrigger id="season">
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spring">Spring</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                    <SelectItem value="autumn">Autumn</SelectItem>
                    <SelectItem value="winter">Winter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rainfall">Average Rainfall (mm/month)</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="rainfall"
                    min={0}
                    max={300}
                    step={10}
                    value={[formData.rainfall]}
                    onValueChange={(value) => handleInputChange("rainfall", value[0])}
                  />
                  <span className="w-12 text-center">{formData.rainfall}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Average Temperature (°C)</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="temperature"
                    min={0}
                    max={50}
                    step={1}
                    value={[formData.temperature]}
                    onValueChange={(value) => handleInputChange("temperature", value[0])}
                  />
                  <span className="w-12 text-center">{formData.temperature}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousCrop">Previous Crop</Label>
                <Input
                  id="previousCrop"
                  placeholder="What did you grow last season?"
                  value={formData.previousCrop}
                  onChange={(e) => handleInputChange("previousCrop", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (acres)</Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder="Enter farm size"
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange("farmSize", e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                Get Recommendations
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="lg:col-span-2">
          {results ? (
            <Card>
              <CardHeader>
                <CardTitle>Recommended Crops</CardTitle>
                <CardDescription>Based on your farm conditions, here are the best crops to grow</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recommendations">
                  <TabsList className="mb-4">
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    <TabsTrigger value="comparison">Comparison</TabsTrigger>
                  </TabsList>

                  <TabsContent value="recommendations" className="space-y-6">
                    {results.crops.map((crop, index) => (
                      <Card key={index} className={index === 0 ? "border-green-500 border-2" : ""}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-xl">{crop.name}</CardTitle>
                            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                              {crop.score}% Match
                            </div>
                          </div>
                          <CardDescription>Growth period: {crop.growthPeriod}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="mb-4">{crop.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Profitability</p>
                              <div className="w-full bg-muted rounded-full h-2.5 mt-1">
                                <div
                                  className="bg-green-500 h-2.5 rounded-full"
                                  style={{ width: `${crop.profitability}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Water Requirement</p>
                              <div className="w-full bg-muted rounded-full h-2.5 mt-1">
                                <div
                                  className="bg-blue-500 h-2.5 rounded-full"
                                  style={{ width: `${crop.waterRequirement}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Helpful
                            </Button>
                            <Button variant="outline" size="sm">
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              Not Helpful
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="comparison">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="text-left p-3 border">Crop</th>
                            <th className="text-left p-3 border">Match Score</th>
                            <th className="text-left p-3 border">Profitability</th>
                            <th className="text-left p-3 border">Water Requirement</th>
                            <th className="text-left p-3 border">Growth Period</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.crops.map((crop, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                              <td className="p-3 border font-medium">{crop.name}</td>
                              <td className="p-3 border">{crop.score}%</td>
                              <td className="p-3 border">
                                <div className="flex items-center">
                                  <div className="w-full bg-muted rounded-full h-2 mr-2">
                                    <div
                                      className="bg-green-500 h-2 rounded-full"
                                      style={{ width: `${crop.profitability}%` }}
                                    ></div>
                                  </div>
                                  <span>{crop.profitability}%</span>
                                </div>
                              </td>
                              <td className="p-3 border">
                                <div className="flex items-center">
                                  <div className="w-full bg-muted rounded-full h-2 mr-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full"
                                      style={{ width: `${crop.waterRequirement}%` }}
                                    ></div>
                                  </div>
                                  <span>{crop.waterRequirement}%</span>
                                </div>
                              </td>
                              <td className="p-3 border">{crop.growthPeriod}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6">
                      <Button className="flex items-center">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View Detailed Analysis
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4">Get Personalized Crop Recommendations</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form with your farm details to receive AI-powered crop recommendations tailored to your
                  specific conditions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Soil Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      We consider your soil type to suggest crops that will thrive in your conditions.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Climate Factors</h4>
                    <p className="text-sm text-muted-foreground">
                      Temperature, rainfall, and seasonal patterns are analyzed for optimal crop selection.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Crop Rotation</h4>
                    <p className="text-sm text-muted-foreground">
                      Previous crops are considered to maintain soil health and prevent disease.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Market Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      We factor in profitability and market demand for recommended crops.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

