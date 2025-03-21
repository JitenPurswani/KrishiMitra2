import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Sprout, Leaf, FileText, RefreshCw } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden mb-12">
        <div className="relative bg-[url('/bg2.jpg')] bg-cover bg-center p-8 md:p-16 before:content-[''] before:absolute before:inset-0 before:bg-black/40">
          <div className="max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Smart Farming Solutions for Modern Agriculture
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get personalized crop recommendations, learn organic farming techniques, and discover government schemes
              to enhance your farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="mb-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-green-800">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Crop Recommendation Card */}
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center bg-white border-green-100">
            <div className="pt-6 transition-transform duration-300 hover:scale-110">
              <Sprout className="h-10 w-10 text-green-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Crop Recommendation</CardTitle>
              <CardDescription> </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              <p className="text-sm text-muted-foreground"></p>
            </CardContent>
            <CardFooter className="w-full mt-auto">
              <Button asChild className="w-full">
                <Link href="/crop-recommendation">Get Recommendations</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center bg-white border-green-100">
            <div className="pt-6 transition-transform duration-300 hover:scale-110">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Organic Farming Guide</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              <p className="text-sm text-muted-foreground"></p>
            </CardContent>
            <CardFooter className="w-full mt-auto">
              <Button asChild className="w-full">
                <Link href="/organic-farming">Explore Guides</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center bg-white border-green-100">
            <div className="pt-6 transition-transform duration-300 hover:scale-110">
              <FileText className="h-10 w-10 text-green-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Government Schemes</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              <p className="text-sm text-muted-foreground"></p>
            </CardContent>
            <CardFooter className="w-full mt-auto">
              <Button asChild className="w-full">
                <Link href="/government-schemes">View Schemes</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center bg-white border-green-100">
            <div className="pt-6 transition-transform duration-300 hover:scale-110">
              <RefreshCw className="h-10 w-10 text-green-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Crop Rotation</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              <p className="text-sm text-muted-foreground"></p>
            </CardContent>
            <CardFooter className="w-full mt-auto">
              <Button asChild className="w-full">
                <Link href="/crop-rotation">Plan Rotation</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Featured Content */}
      <section className="mb-16 px-4 py-8 bg-gradient-to-br from-green-50/50 to-white rounded-xl">
        <h2 className="text-2xl font-bold mb-8 text-center text-green-800">Featured Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <Card className="flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-green-100">
            <CardHeader>
              <CardTitle>Seasonal Farming Tips</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Get advice on seasonal farming practices, weather-based recommendations, and crop guidance to maximize your yield throughout the year.</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="/farming-tips">Read More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-green-100">
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Discover inspiring stories of farmers who transformed their farms using modern techniques, organic practices, and innovative approaches.</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="/success-stories">Read More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-green-100">
            <CardHeader>
              <CardTitle>Market Trends</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Access real-time market data, price forecasts, and demand analysis to make informed decisions about your crop planning and sales.</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="https://enam.gov.in/web/dashboard/trade-data" target="_blank" rel="noopener noreferrer">
                  View Market Data
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-green-100">
            <CardHeader>
              <CardTitle>Weather Updates</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Stay informed about local weather conditions, forecasts, and agricultural advisories to plan your farming activities effectively.</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="https://mausam.imd.gov.in/" target="_blank" rel="noopener noreferrer">
                  Check Weather
                </Link>
              </Button>
            </CardFooter>
          </Card>
            
        </div>
      </section>

      {/* Latest Agricultural News Section */}
      <section className="bg-gradient-to-br from-green-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-800">Latest Agricultural News</h2>
        <p className="mb-6 max-w-2xl mx-auto text-center text-gray-600">
          Stay informed about the latest agricultural policies, technological innovations, and sustainable farming practices shaping the future of agriculture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild variant="outline" size="lg" className="w-full bg-white hover:bg-green-50 hover:text-green-700 transition-colors duration-300 shadow-sm">
            <Link href="https://aajtak.in/agriculture" target="_blank" rel="noopener noreferrer">
              हिंदी समाचार
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full bg-white hover:bg-green-50 hover:text-green-700 transition-colors duration-300 shadow-sm">
            <Link href="https://www.esakal.com" target="_blank" rel="noopener noreferrer">
              मराठी बातम्या
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full bg-white hover:bg-green-50 hover:text-green-700 transition-colors duration-300 shadow-sm">
            <Link href="https://economictimes.indiatimes.com/topic/farmers" target="_blank" rel="noopener noreferrer">
              English News
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

