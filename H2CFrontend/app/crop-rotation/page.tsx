"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { RefreshCw, Info, Download, Save, Trash2, Plus, AlertCircle } from "lucide-react"

export default function CropRotation() {
  const [activeTab, setActiveTab] = useState("planner")
  const [selectedSeason, setSelectedSeason] = useState("summer")
  const [savedPlans, setSavedPlans] = useState<Array<{name: string, grid: any[][], date: string}>>([])
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for crops with updated seasonal compatibility
  const cropCategories = {
    "Cereals & Millets": [
      { name: "Jowar", icon: "🌾", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Bajra", icon: "🌾", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Rice", icon: "🌾", color: "bg-yellow-100", seasons: ["monsoon"] },
      { name: "Wheat", icon: "🌾", color: "bg-yellow-100", seasons: ["winter"] },
      { name: "Maize", icon: "🌾", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Ragi", icon: "🌾", color: "bg-yellow-100", seasons: ["monsoon"] },
    ],
    Legumes: [
      { name: "Tur Dal", icon: "🌱", color: "bg-green-100", seasons: ["monsoon"] },
      { name: "Moong Dal", icon: "🌱", color: "bg-green-100", seasons: ["summer"] },
      { name: "Urad Dal", icon: "🌱", color: "bg-green-100", seasons: ["monsoon"] },
      { name: "Chickpeas", icon: "🌱", color: "bg-green-100", seasons: ["winter"] },
      { name: "Soybeans", icon: "🌱", color: "bg-green-100", seasons: ["monsoon"] },
      { name: "Groundnut", icon: "🌱", color: "bg-green-100", seasons: ["summer"] },
    ],
    Vegetables: [
      { name: "Onion", icon: "🧅", color: "bg-amber-100", seasons: ["winter", "summer"] },
      { name: "Tomato", icon: "🍅", color: "bg-amber-100", seasons: ["spring", "summer"] },
      { name: "Potato", icon: "🥔", color: "bg-amber-100", seasons: ["winter"] },
      { name: "Cauliflower", icon: "🥬", color: "bg-amber-100", seasons: ["winter"] },
      { name: "Cabbage", icon: "🥬", color: "bg-amber-100", seasons: ["winter"] },
      { name: "Brinjal", icon: "🍆", color: "bg-amber-100", seasons: ["summer", "autumn"] },
      { name: "Okra", icon: "🥬", color: "bg-amber-100", seasons: ["summer"] },
      { name: "Bitter Gourd", icon: "🥒", color: "bg-amber-100", seasons: ["summer"] },
    ],
    "Cash Crops": [
      { name: "Cotton", icon: "🌿", color: "bg-blue-100", seasons: ["summer", "autumn"] },
      { name: "Sugarcane", icon: "🎋", color: "bg-blue-100", seasons: ["spring"] },
      { name: "Turmeric", icon: "🌿", color: "bg-blue-100", seasons: ["summer"] },
      { name: "Ginger", icon: "🌿", color: "bg-blue-100", seasons: ["spring", "summer"] },
    ],
    "Fruiting Vegetables": [
      { name: "Squash", icon: "🎃", color: "bg-red-100", seasons: ["summer"] },
      { name: "Okra", icon: "🫑", color: "bg-red-100", seasons: ["summer"] },
      { name: "Pumpkin", icon: "🎃", color: "bg-red-100", seasons: ["summer"] },
      { name: "Zucchini", icon: "🥒", color: "bg-red-100", seasons: ["summer"] },
      { name: "Tomatoes", icon: "🍅", color: "bg-red-100", seasons: ["summer"] },
      { name: "Peppers", icon: "🫑", color: "bg-red-100", seasons: ["summer"] },
      { name: "Eggplant", icon: "🍆", color: "bg-red-100", seasons: ["summer"] },
      { name: "Cucumbers", icon: "🥒", color: "bg-red-100", seasons: ["summer"] },
    ],
    Grains: [
      { name: "Rice", icon: "🌾", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Millet", icon: "🌾", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Sorghum", icon: "🌾", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Rye", icon: "🌾", color: "bg-yellow-100", seasons: ["autumn", "winter"] },
      { name: "Wheat", icon: "🌾", color: "bg-yellow-100", seasons: ["autumn", "winter"] },
      { name: "Corn", icon: "🌽", color: "bg-yellow-100", seasons: ["summer"] },
      { name: "Barley", icon: "🌾", color: "bg-yellow-100", seasons: ["autumn", "winter"] },
      { name: "Oats", icon: "🌾", color: "bg-yellow-100", seasons: ["autumn", "winter"] },
    ],
  }

  // Initial empty grid for the planner
  const initialGrid = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null))

  // Function to add a new plot
  const addPlot = () => {
    setPlannerGrid([...plannerGrid, Array(3).fill(null)])
  }
  const [plannerGrid, setPlannerGrid] = useState(initialGrid)
  const [selectedCrop, setSelectedCrop] = useState<{ name: string; icon: string; color: string } | null>(null)

  // Function to handle cell click in the planner
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (!selectedCrop) return

    // Get the season for the target column (case-insensitive comparison)
    const seasonMap = { 0: "summer", 1: "monsoon", 2: "winter" }
    const targetSeason = seasonMap[colIndex].toLowerCase()

    // Check if the selected crop is suitable for the target season
    const cropData = Object.values(cropCategories)
      .flat()
      .find(crop => crop.name === selectedCrop.name)

    if (!cropData) return

    // Check if the crop can be grown in the target season
    const isValidSeason = cropData.seasons.some(
      season => season.toLowerCase() === targetSeason
    )

    if (!isValidSeason) {
      alert(`${selectedCrop.name} is not suitable for ${seasonHeaders[colIndex]} season!`)
      return
    }

    const newGrid = [...plannerGrid]
    newGrid[rowIndex][colIndex] = selectedCrop
    setPlannerGrid(newGrid)
  }

  // Function to clear a cell
  const clearCell = (rowIndex: number, colIndex: number) => {
    const newGrid = [...plannerGrid]
    newGrid[rowIndex][colIndex] = null
    setPlannerGrid(newGrid)
  }

  // Function to clear the entire grid
  const clearGrid = () => {
    setPlannerGrid(initialGrid)
  }

  // Function to generate SVG for the plan
  const generatePlanSVG = () => {
    const svgWidth = 800
    const svgHeight = 400
    const cellWidth = svgWidth / 3
    const rowHeight = svgHeight / plannerGrid.length

    let svgContent = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .header { font: bold 24px Arial; fill:rgb(149, 170, 199); }
        .cell-text { font: 16px Arial; fill:rgb(213, 221, 234); }
        .season { font: bold 20px Arial; fill:rgb(130, 162, 218); }
      </style>
      <rect width="100%" height="100%" fill="white"/>`

    // Add season headers
    seasonHeaders.forEach((season, i) => {
      svgContent += `<text x="${cellWidth * i + cellWidth/2}" y="30" text-anchor="middle" class="season">${season}</text>`
    })

    // Add grid and crops
    plannerGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const x = colIndex * cellWidth
        const y = rowIndex * rowHeight + 50

        // Draw cell border
        svgContent += `<rect x="${x}" y="${y}" width="${cellWidth}" height="${rowHeight}" fill="${cell?.color || '#f7fafc'}" stroke="#e2e8f0"/>`

        if (cell) {
          // Add crop icon and name
          svgContent += `
            <text x="${x + cellWidth/2}" y="${y + rowHeight/2 - 10}" text-anchor="middle" class="cell-text">${cell.icon}</text>
            <text x="${x + cellWidth/2}" y="${y + rowHeight/2 + 20}" text-anchor="middle" class="cell-text">${cell.name}</text>`
        }
      })
    })

    svgContent += '</svg>'
    return svgContent
  }

  // Function to save the current plan
  const savePlan = () => {
    const planName = `Rotation Plan ${savedPlans.length + 1}`
    const newPlan = {
      name: planName,
      grid: plannerGrid,
      date: new Date().toLocaleDateString()
    }
    setSavedPlans([...savedPlans, newPlan])

    // Save plan as SVG image
    const svgContent = generatePlanSVG()
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${planName.toLowerCase().replace(/ /g, '_')}.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    clearGrid()
    setActiveTab('saved')
  }

  // Get crops for the selected season
  const getSeasonalCrops = () => {
    const seasonalCrops: { category: string; crops: any[] }[] = []

    Object.entries(cropCategories).forEach(([category, crops]) => {
      const filteredCrops = crops.filter((crop) => crop.seasons.includes(selectedSeason))
      if (filteredCrops.length > 0) {
        seasonalCrops.push({
          category,
          crops: filteredCrops,
        })
      }
    })

    return seasonalCrops
  }

  // Season headers for the planner
  const seasonHeaders = ["Summer", "Monsoon", "Winter"]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Crop Rotation Guide</h1>
      <p className="text-muted-foreground mb-8">
        Plan and optimize your crop rotation to improve soil health and maximize yields
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList>
          <TabsTrigger value="planner">Rotation Planner</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="saved">Saved Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="planner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Crop Selection Panel */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Select Crops</CardTitle>
                <CardDescription>Choose crops to add to your rotation plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="season">Growing Season</Label>
                    <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                      <SelectTrigger id="season">
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summer">Summer</SelectItem>
                        <SelectItem value="monsoon">Monsoon</SelectItem>
                        <SelectItem value="winter">Winter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="search">Search Crops</Label>
                    <Input
                      id="search"
                      placeholder="Search for crops..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  {getSeasonalCrops()
                    .map(({ category, crops }) => ({
                      category,
                      crops: crops.filter(crop =>
                        crop.name.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                    }))
                    .filter(({ crops }) => crops.length > 0)
                    .map(({ category, crops }) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium mb-2">{category}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {crops.map((crop) => (
                          <Button
                            key={crop.name}
                            variant={selectedCrop?.name === crop.name ? "default" : "outline"}
                            className={`justify-start h-auto py-2 ${selectedCrop?.name === crop.name ? "" : crop.color}`}
                            onClick={() => setSelectedCrop(crop)}
                          >
                            <span className="mr-2">{crop.icon}</span>
                            {crop.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" onClick={() => setSelectedCrop(null)}>
                  Clear Selection
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Select a crop from the list, then click on a cell in the planner grid to place it. Proper crop
                        rotation helps prevent soil depletion and reduces pest problems.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardFooter>
            </Card>

            {/* Planner Grid */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Rotation Planner</CardTitle>
                    <CardDescription>Plan your crop rotation across seasons and years</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={clearGrid}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                    <Button size="sm" onClick={savePlan}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Plan
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button
                    variant="outline"
                    className="w-auto"
                    onClick={addPlot}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Plot
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-2 border bg-muted font-medium text-left">Plot / Season</th>
                        {seasonHeaders.map((season, index) => (
                          <th key={index} className="p-2 border bg-muted font-medium text-center">
                            {season}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {plannerGrid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td className="p-2 border bg-muted font-medium">Plot {rowIndex + 1}</td>
                          {row.map((cell, colIndex) => (
                            <td
                              key={colIndex}
                              className={`p-2 border text-center h-20 ${cell ? cell.color : "bg-white dark:bg-gray-800"} ${!cell && selectedCrop ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" : ""}`}
                              onClick={() => handleCellClick(rowIndex, colIndex)}
                            >
                              {cell ? (
                                <div className="flex flex-col items-center">
                                  <span className="text-2xl mb-1">{cell.icon}</span>
                                  <span className="text-sm">{cell.name}</span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 mt-1 opacity-50 hover:opacity-100"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      clearCell(rowIndex, colIndex)
                                    }}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center h-full">
                                  {selectedCrop && <Plus className="h-6 w-6 text-gray-400" />}
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                    Rotation Tips
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Rotate between different plant families to break pest and disease cycles</li>
                    <li>• Follow heavy feeders (like corn) with nitrogen fixers (like beans)</li>
                    <li>• Consider root depth when planning - alternate deep and shallow rooted crops</li>
                    <li>• Allow at least 3 years before planting the same family in the same location</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations">
          <Card>
            <CardHeader>
              <CardTitle>AI Crop Rotation Recommendations</CardTitle>
              <CardDescription>
                Get personalized recommendations based on your previous crops and soil conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="previous-crop">Previous Crop</Label>
                    <Select>
                      <SelectTrigger id="previous-crop">
                        <SelectValue placeholder="Select previous crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corn">Corn</SelectItem>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="soybeans">Soybeans</SelectItem>
                        <SelectItem value="potatoes">Potatoes</SelectItem>
                        <SelectItem value="tomatoes">Tomatoes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="soil-type">Soil Type</Label>
                    <Select>
                      <SelectTrigger id="soil-type">
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="silty">Silty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select>
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="northeast">Northeast</SelectItem>
                        <SelectItem value="southeast">Southeast</SelectItem>
                        <SelectItem value="midwest">Midwest</SelectItem>
                        <SelectItem value="southwest">Southwest</SelectItem>
                        <SelectItem value="west">West</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="goals">Rotation Goals</Label>
                    <Select>
                      <SelectTrigger id="goals">
                        <SelectValue placeholder="Select primary goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="soil-health">Improve Soil Health</SelectItem>
                        <SelectItem value="pest-management">Pest Management</SelectItem>
                        <SelectItem value="yield">Maximize Yield</SelectItem>
                        <SelectItem value="water-conservation">Water Conservation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="years">Rotation Length</Label>
                    <Select>
                      <SelectTrigger id="years">
                        <SelectValue placeholder="Select number of years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2-Year Rotation</SelectItem>
                        <SelectItem value="3">3-Year Rotation</SelectItem>
                        <SelectItem value="4">4-Year Rotation</SelectItem>
                        <SelectItem value="5">5-Year Rotation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Input id="notes" placeholder="Any specific concerns or requirements?" />
                  </div>
                </div>
              </div>

              <Button className="w-full">Generate Recommendations</Button>

              <div className="p-8 text-center border rounded-lg">
                <h3 className="text-lg font-medium mb-2">Enter Your Details</h3>
                <p className="text-muted-foreground mb-4">
                  Fill out the form above to receive AI-powered crop rotation recommendations tailored to your specific
                  farm conditions.
                </p>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Crop rotation illustration"
                    className="rounded-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved">
          {savedPlans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedPlans.map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>Created on {plan.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        const planJson = JSON.stringify(plan, null, 2)
                        const blob = new Blob([planJson], { type: 'application/json' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = `${plan.name.toLowerCase().replace(/ /g, '_')}.json`
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                        URL.revokeObjectURL(url)
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle>Create New Plan</CardTitle>
                  <CardDescription>Start a new crop rotation plan</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-40">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 w-16 rounded-full"
                    onClick={() => {
                      clearGrid()
                      setActiveTab('planner')
                    }}
                  >
                    <Plus className="h-8 w-8" />
                  </Button>
                  <p className="text-muted-foreground mt-4">Click to create a new rotation plan</p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="p-8 text-center">
              <div className="mb-4">
                <Save className="h-12 w-12 text-muted-foreground mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">No Saved Plans</h3>
              <p className="text-muted-foreground mb-6">
                You haven't saved any crop rotation plans yet. Create and save a plan to see it here.
              </p>
              <Button onClick={() => setActiveTab("planner")}>Create Your First Plan</Button>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

