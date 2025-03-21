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
        { title: "माती परीक्षण मार्गदर्शक (Soil Testing Guide in Marathi)", duration: "12:45", url: "https://www.youtube.com/watch?v=VxuJrKiUkDY", videoId: "VxuJrKiUkDY", thumbnail: "https://img.youtube.com/vi/VxuJrKiUkDY/maxresdefault.jpg" },
        { title: "सेंद्रिय खत बनवण्याची पद्धत (Organic Fertilizer Making)", duration: "15:20", url: "https://www.youtube.com/watch?v=Y7YE6WJ7RIw", videoId: "Y7YE6WJ7RIw", thumbnail: "https://img.youtube.com/vi/Y7YE6WJ7RIw/maxresdefault.jpg" },
        { title: "हिरवळीचे खत - फायदे आणि पद्धती (Green Manure Benefits)", duration: "10:30", url: "https://www.youtube.com/watch?v=xK9pxfKd0KU", videoId: "xK9pxfKd0KU", thumbnail: "https://img.youtube.com/vi/xK9pxfKd0KU/maxresdefault.jpg" },
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
        { title: "सहपिक पद्धती - किटक नियंत्रण (Companion Planting for Pest Control)", duration: "14:15", url: "https://www.youtube.com/watch?v=RxGVUjZR8Ys", videoId: "RxGVUjZR8Ys", thumbnail: "https://img.youtube.com/vi/RxGVUjZR8Ys/maxresdefault.jpg" },
        { title: "नैसर्गिक कीटकनाशके (Natural Pesticides in Marathi)", duration: "11:30", url: "https://www.youtube.com/watch?v=L8bHxcgqJHE", videoId: "L8bHxcgqJHE", thumbnail: "https://img.youtube.com/vi/L8bHxcgqJHE/maxresdefault.jpg" },
        { title: "जैविक कीटक नियंत्रण (Organic Pest Management)", duration: "16:20", url: "https://www.youtube.com/watch?v=9q_mzxPB8Ac", videoId: "9q_mzxPB8Ac", thumbnail: "https://img.youtube.com/vi/9q_mzxPB8Ac/maxresdefault.jpg" },
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
          image: "/compost.jpeg",
        },
        {
          title: "Balancing Green and Brown Materials",
          description: "Maintain the right ratio of nitrogen-rich 'green' materials and carbon-rich 'brown' materials.",
          image: "/green.jpeg",
        },
        {
          title: "Turning and Monitoring",
          description: "Regularly turn your compost and monitor moisture and temperature for optimal decomposition.",
          image: "/monitoring.jpeg",
        },
        {
          title: "Using Finished Compost",
          description: "Know when your compost is ready and how to apply it to your garden or farm.",
          image: "/compost.jpeg",
        },
      ],
      videos: [
        { title: "कंपोस्ट खत तयार करण्याची पद्धत (Composting Method)", duration: "13:45", url: "https://www.youtube.com/watch?v=zXJJt_VqhKs", videoId: "zXJJt_VqhKs", thumbnail: "https://img.youtube.com/vi/zXJJt_VqhKs/maxresdefault.jpg" },
        { title: "गांडूळ खत बनवण्याची संपूर्ण माहिती (Complete Vermicompost Guide)", duration: "18:25", url: "https://www.youtube.com/watch?v=YxgX1vhqMhM", videoId: "YxgX1vhqMhM", thumbnail: "https://img.youtube.com/vi/YxgX1vhqMhM/maxresdefault.jpg" },
        { title: "कंपोस्ट खतातील समस्या आणि उपाय (Composting Problems and Solutions)", duration: "12:10", url: "https://www.youtube.com/watch?v=K5AFJm-crlE", videoId: "K5AFJm-crlE", thumbnail: "https://img.youtube.com/vi/K5AFJm-crlE/maxresdefault.jpg" },
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
          image: "/water.jpeg",
        },
        {
          title: "Drip Irrigation Systems",
          description: "Set up drip irrigation for targeted watering with minimal waste.",
          image: "/drip.jpeg",
        },
        {
          title: "Rainwater Harvesting",
          description: "Collect and store rainwater for use during dry periods.",
          image: "/raiwater.jpeg",
        },
        {
          title: "Mulching for Moisture Retention",
          description: "Apply mulch to reduce evaporation and maintain soil moisture.",
          image: "/mulch.jpg",
        },
      ],
      videos: [
        { title: "ठिबक सिंचन प्रणाली (Drip Irrigation System)", duration: "16:35", url: "https://www.youtube.com/watch?v=vBU_dAIJ4WE", videoId: "vBU_dAIJ4WE", thumbnail: "https://img.youtube.com/vi/vBU_dAIJ4WE/maxresdefault.jpg" },
        { title: "पाणी व्यवस्थापन आणि पावसाचे पाणी साठवण (Water Management and Rainwater Harvesting)", duration: "14:50", url: "https://www.youtube.com/watch?v=XH5YKo1nDHw", videoId: "XH5YKo1nDHw", thumbnail: "https://img.youtube.com/vi/XH5YKo1nDHw/maxresdefault.jpg" },
        { title: "आच्छादन तंत्र - पाणी जतन (Mulching Techniques for Water Conservation)", duration: "11:25", url: "https://www.youtube.com/watch?v=0IwJZk4Z7x0", videoId: "0IwJZk4Z7x0", thumbnail: "https://img.youtube.com/vi/0IwJZk4Z7x0/maxresdefault.jpg" },
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
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
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
          </div>
        </div>
      </Tabs>
    </div>
  )
}

