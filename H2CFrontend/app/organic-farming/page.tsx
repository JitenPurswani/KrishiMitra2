"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Play, ThumbsUp, Download, BookOpen } from "lucide-react"

export default function OrganicFarming() {
  const [activeTab, setActiveTab] = useState("soil-preparation")

  const topics = [
    {
      id: "soil-preparation",
      title: "Soil Preparation",
      description: "Learn how to prepare your soil for organic farming",
      steps: [
        {
          title: "Soil Testing",
          description:
            "Test your soil to understand its composition, pH level, and nutrient content. This will help you determine what amendments are needed.",
          image: "/soil.jpeg",
        },
        {
          title: "Adding Organic Matter",
          description:
            "Incorporate compost, well-rotted manure, or other organic matter to improve soil structure and fertility.",
          image: "/organic.jpeg",
        },
        {
          title: "Cover Cropping",
          description:
            "Plant cover crops like clover, vetch, or rye to add nutrients, prevent erosion, and improve soil structure.",
          image: "/cover.jpg",
        },
        {
          title: "Crop Rotation",
          description: "Plan a crop rotation schedule to maintain soil health and prevent pest and disease buildup.",
          image: "/rotation.jpeg",
        },
      ],
      videos: [
        { title: "Complete Guide to Soil Testing", duration: "15:24", url: "https://www.youtube.com/watch?v=LWU8nRDJnuI", videoId: "LWU8nRDJnuI", thumbnail: "https://img.youtube.com/vi/LWU8nRDJnuI/maxresdefault.jpg" },
        { title: "How to Make High-Quality Compost", duration: "12:08", url: "https://www.youtube.com/watch?v=hanno4zcSFw", videoId: "hanno4zcSFw", thumbnail: "https://img.youtube.com/vi/hanno4zcSFw/maxresdefault.jpg" },
        { title: "Cover Cropping Techniques", duration: "18:45", url: "https://www.youtube.com/watch?v=qMW6PXeYzPc", videoId: "qMW6PXeYzPc", thumbnail: "https://img.youtube.com/vi/qMW6PXeYzPc/maxresdefault.jpg" },
      ],
      faqs: [
        {
          question: "How often should I test my soil?",
          answer:
            "It's recommended to test your soil at least once every 2-3 years. However, if you're experiencing issues with plant growth or making significant changes to your farming practices, more frequent testing may be beneficial.",
        },
        {
          question: "What's the best time to add compost to soil?",
          answer:
            "The best time to add compost is in the fall or early spring, a few weeks before planting. This gives the compost time to integrate with the soil and allows microorganisms to begin breaking it down.",
        },
        {
          question: "Can I make my own compost?",
          answer:
            "Yes, making your own compost is an excellent way to recycle organic waste and create a valuable soil amendment. You can compost kitchen scraps, yard waste, and other organic materials.",
        },
      ],
    },
    {
      id: "pest-control",
      title: "Pest Control",
      description: "Natural methods to control pests without chemicals",
      steps: [
        {
          title: "Companion Planting",
          description: "Plant compatible crops together to deter pests and attract beneficial insects.",
          image: "/companion.jpeg",
        },
        {
          title: "Beneficial Insects",
          description:
            "Attract and introduce beneficial insects like ladybugs, lacewings, and predatory wasps to control pest populations.",
          image: "/insect.jpeg",
        },
        {
          title: "Physical Barriers",
          description: "Use row covers, netting, and other physical barriers to keep pests away from your crops.",
          image: "/barrier.jpeg",
        },
        {
          title: "Natural Sprays",
          description: "Create and use natural pest deterrents like neem oil, garlic spray, or soap spray.",
          image: "/spra.jpeg",
        },
      ],
      videos: [
        { title: "Companion Planting Strategies", duration: "14:32", url: "https://www.youtube.com/watch?v=zhVJzXqLvv4", videoId: "zhVJzXqLvv4", thumbnail: "https://img.youtube.com/vi/zhVJzXqLvv4/maxresdefault.jpg" },
        { title: "How to Attract Beneficial Insects", duration: "10:15", url: "https://www.youtube.com/watch?v=dqKzJwK_oNw", videoId: "dqKzJwK_oNw", thumbnail: "https://img.youtube.com/vi/dqKzJwK_oNw/maxresdefault.jpg" },
        { title: "Making Natural Pest Sprays", duration: "08:47", url: "https://www.youtube.com/watch?v=7UW7HEXPcd4", videoId: "7UW7HEXPcd4", thumbnail: "https://img.youtube.com/vi/7UW7HEXPcd4/maxresdefault.jpg" },
      ],
      faqs: [
        {
          question: "What are the best companion plants for tomatoes?",
          answer:
            "Basil, marigolds, nasturtiums, and borage are excellent companion plants for tomatoes. They help repel pests like hornworms and aphids, and some even improve the flavor of tomatoes.",
        },
        {
          question: "How do I make a basic neem oil spray?",
          answer:
            "Mix 1-2 teaspoons of neem oil with 1 teaspoon of mild liquid soap in 1 quart of warm water. Shake well and spray on affected plants, making sure to cover both sides of leaves. Apply in the evening to avoid leaf burn.",
        },
        {
          question: "When should I release ladybugs in my garden?",
          answer:
            "Release ladybugs in the evening when it's cool and preferably after watering your garden. This encourages them to stay rather than fly away. Make sure there are aphids or other food sources available for them.",
        },
      ],
    },
    {
      id: "composting",
      title: "Composting",
      description: "Turn waste into valuable organic fertilizer",
      steps: [
        {
          title: "Setting Up a Compost Bin",
          description: "Choose the right location and container for your compost pile or bin.",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Balancing Green and Brown Materials",
          description: "Maintain the right ratio of nitrogen-rich 'green' materials and carbon-rich 'brown' materials.",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Turning and Monitoring",
          description: "Regularly turn your compost and monitor moisture and temperature for optimal decomposition.",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Using Finished Compost",
          description: "Know when your compost is ready and how to apply it to your garden or farm.",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
      videos: [
        { title: "Building the Perfect Compost Bin", duration: "16:20", url: "https://www.youtube.com/watch?v=qwSM7wKPTxU", videoId: "qwSM7wKPTxU", thumbnail: "https://img.youtube.com/vi/qwSM7wKPTxU/maxresdefault.jpg" },
        { title: "Compost Troubleshooting Guide", duration: "11:35", url: "https://www.youtube.com/watch?v=M1kIpCBD3UI", videoId: "M1kIpCBD3UI", thumbnail: "https://img.youtube.com/vi/M1kIpCBD3UI/maxresdefault.jpg" },
        { title: "Vermicomposting: Composting with Worms", duration: "13:42", url: "https://www.youtube.com/watch?v=QmB6NM-TJ3c", videoId: "QmB6NM-TJ3c", thumbnail: "https://img.youtube.com/vi/QmB6NM-TJ3c/maxresdefault.jpg" },
      ],
      faqs: [
        {
          question: "What should NOT go in my compost?",
          answer:
            "Avoid meat, dairy, oils, diseased plants, pet waste, and treated wood. These can attract pests, introduce pathogens, or contain harmful chemicals.",
        },
        {
          question: "How long does it take to make compost?",
          answer:
            "It typically takes 3-12 months to produce finished compost, depending on the materials, size of the pile, how often you turn it, and weather conditions. Hot composting methods can produce compost in as little as 1-3 months.",
        },
        {
          question: "Why does my compost smell bad?",
          answer:
            "A bad smell usually indicates too much nitrogen ('green' materials) or poor aeration. Add more carbon-rich 'brown' materials like dried leaves or straw, and turn the pile more frequently to increase oxygen flow.",
        },
      ],
    },
    {
      id: "water-management",
      title: "Water Management",
      description: "Efficient water use for sustainable farming",
      steps: [
        {
          title: "Water Conservation Techniques",
          description: "Implement methods to reduce water usage and maximize efficiency.",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Drip Irrigation Systems",
          description: "Set up drip irrigation for targeted watering with minimal waste.",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Rainwater Harvesting",
          description: "Collect and store rainwater for use during dry periods.",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Mulching for Moisture Retention",
          description: "Apply mulch to reduce evaporation and maintain soil moisture.",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
      videos: [
        { title: "DIY Drip Irrigation System", duration: "19:05", url: "https://www.youtube.com/watch?v=El0N8TtV3rw", videoId: "El0N8TtV3rw", thumbnail: "https://img.youtube.com/vi/El0N8TtV3rw/maxresdefault.jpg" },
        { title: "Setting Up Rainwater Collection", duration: "14:28", url: "https://www.youtube.com/watch?v=uWmJpEwk5eY", videoId: "uWmJpEwk5eY", thumbnail: "https://img.youtube.com/vi/uWmJpEwk5eY/maxresdefault.jpg" },
        { title: "Best Mulching Practices", duration: "09:56", url: "https://www.youtube.com/watch?v=RhZJDsszlCg", videoId: "RhZJDsszlCg", thumbnail: "https://img.youtube.com/vi/RhZJDsszlCg/maxresdefault.jpg" },
      ],
      faqs: [
        {
          question: "How much water do different crops need?",
          answer:
            "Water needs vary widely by crop. Leafy greens typically need 1-1.5 inches per week, while fruiting plants like tomatoes may need 1.5-2 inches. Root vegetables often require consistent moisture but can tolerate slightly less water than leafy greens.",
        },
        {
          question: "What's the best time to water plants?",
          answer:
            "Early morning is generally the best time to water plants. This allows water to reach the roots before evaporating and gives foliage time to dry before evening, reducing disease risk. Avoid watering during the hottest part of the day.",
        },
        {
          question: "How can I tell if my plants are getting enough water?",
          answer:
            "Check the soil moisture 1-2 inches below the surface. Most plants prefer soil that is moist but not soggy. Wilting can indicate either too much or too little water. Yellowing lower leaves often suggest overwatering, while crisp, brown leaf edges may indicate underwatering.",
        },
      ],
    },
  ]

  const currentTopic = topics.find((topic) => topic.id === activeTab) || topics[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Organic Farming Guide</h1>
      <p className="text-muted-foreground mb-8">
        Learn sustainable farming practices to grow healthy crops without synthetic chemicals
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="flex flex-wrap h-auto justify-start mb-4">
          {topics.map((topic) => (
            <TabsTrigger
              key={topic.id}
              value={topic.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {topic.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{currentTopic.title}</CardTitle>
                <CardDescription>{currentTopic.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Step-by-Step Guide */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Step-by-Step Guide</h3>
                  <div className="space-y-6">
                    {currentTopic.steps.map((step, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4">
                          <h4 className="text-lg font-medium flex items-center">
                            <Badge variant="outline" className="mr-2">
                              {index + 1}
                            </Badge>
                            {step.title}
                          </h4>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p>{step.description}</p>
                          </div>
                          <div>
                            <img
                              src={step.image || "/placeholder.svg"}
                              alt={step.title}
                              className="rounded-md w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {currentTopic.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Discussion Forum */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Discussion</h3>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Start New Thread
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <div>
                            <CardTitle className="text-base">How to deal with clay soil for organic farming?</CardTitle>
                            <CardDescription>Posted by FarmerJoe • 2 days ago</CardDescription>
                          </div>
                          <Badge>Hot Topic</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">
                          I'm struggling with heavy clay soil on my new farm. Any tips for improving it organically?
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" /> 12 replies
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" /> 24 likes
                        </div>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <div>
                            <CardTitle className="text-base">Success with companion planting</CardTitle>
                            <CardDescription>Posted by GreenThumb • 5 days ago</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">
                          I wanted to share my success with companion planting this season. My tomatoes have never been
                          healthier!
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" /> 8 replies
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" /> 17 likes
                        </div>
                      </CardFooter>
                    </Card>

                    <Button variant="outline" className="w-full">
                      View All Discussions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Video Tutorials */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
                <CardDescription>Watch and learn organic farming techniques</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentTopic.videos.map((video, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{video.title}</h4>
                      <p className="text-xs text-muted-foreground">{video.duration}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Videos
                </Button>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resources</CardTitle>
                <CardDescription>Helpful guides and tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Organic Certification Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Companion Planting Chart
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Seasonal Planting Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Recommended Books
                </Button>
              </CardContent>
            </Card>

            {/* Expert Advice */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ask an Expert</CardTitle>
                <CardDescription>Get personalized advice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Have a specific question about organic farming? Our experts are here to help.
                </p>
                <Button className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ask a Question
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

