"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, FileText, Calendar, AlertCircle, Download, ExternalLink } from "lucide-react"

export default function GovernmentSchemes() {
  const [state, setState] = useState("")
  const [cropType, setCropType] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for government schemes
  const schemes = [
    {
      id: 1,
      name: "Pradhan Mantri Fasal Bima Yojana",
      shortName: "PMFBY",
      description:
        "A crop insurance scheme that provides financial support to farmers in case of crop failure due to natural calamities, pests, and diseases.",
      eligibility:
        "All farmers including sharecroppers and tenant farmers growing notified crops in the notified areas.",
      benefits: [
        "Comprehensive risk coverage for pre-sowing to post-harvest losses",
        "Low premium rates for farmers",
        "Use of technology for quick claim settlement",
        "Coverage for standing crops, prevented sowing, and post-harvest losses",
      ],
      deadline: "30 days before the start of the crop season",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Crop Sowing Certificate"],
      applicationSteps: [
        "Visit your nearest bank or Common Service Center (CSC)",
        "Fill out the application form with your details",
        "Submit required documents",
        "Pay the premium amount",
        "Receive acknowledgment receipt",
      ],
      status: "Active",
      website: "https://pmfby.gov.in/",
    },
    {
      id: 2,
      name: "PM Kisan Samman Nidhi",
      shortName: "PM-KISAN",
      description:
        "A central sector scheme to provide income support to all landholding farmers' families in the country.",
      eligibility: "All landholding farmers' families with cultivable land, subject to certain exclusions.",
      benefits: [
        "Direct income support of Rs. 6,000 per year to eligible farmer families",
        "Amount paid in three equal installments of Rs. 2,000 each",
        "Direct transfer to bank accounts",
        "Helps farmers meet farm input costs and household needs",
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details"],
      applicationSteps: [
        "Register on the PM-KISAN portal or through Common Service Centers",
        "Fill the application form with personal, bank, and land details",
        "Submit required documents for verification",
        "Track application status on the portal",
      ],
      status: "Active",
      website: "https://pmkisan.gov.in/",
      registrationUrl: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      shortName: "SHC",
      description:
        "A scheme to issue soil health cards to farmers with crop-wise recommendations for nutrients and fertilizers.",
      eligibility: "All farmers with agricultural land.",
      benefits: [
        "Free soil testing for farmers",
        "Crop-wise recommendations for nutrients and fertilizers",
        "Helps in improving soil health and reducing input costs",
        "Promotes sustainable farming practices",
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Aadhaar Card", "Land Records"],
      applicationSteps: [
        "Contact your local agriculture department or Krishi Vigyan Kendra",
        "Submit a soil sample from your field",
        "Receive your Soil Health Card with recommendations",
      ],
      status: "Active",
      website: "https://soilhealth.dac.gov.in/",
      registrationUrl: "https://soilhealth.dac.gov.in/admin/",
    },
    {
      id: 4,
      name: "National Mission for Sustainable Agriculture",
      shortName: "NMSA",
      description: "A scheme to promote sustainable agriculture through climate change adaptation measures.",
      eligibility: "Farmers in rainfed areas and regions vulnerable to climate change.",
      benefits: [
        "Financial assistance for water conservation and management",
        "Support for organic farming and soil health management",
        "Assistance for farm mechanization and resource conservation",
        "Climate-resilient agricultural practices",
      ],
      deadline: "Varies by component",
      states: ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Rajasthan"],
      cropTypes: ["Rainfed Crops", "Organic Crops"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Project Proposal (if applicable)"],
      applicationSteps: [
        "Contact your district agriculture officer",
        "Submit application with project details (if applicable)",
        "Get approval from the district committee",
        "Implement the approved activities",
        "Submit completion report for release of funds",
      ],
      status: "Active",
      website: "https://nmsa.dac.gov.in/",
      registrationUrl: "https://nmsa.dac.gov.in/frmLogin.aspx",
    },
    {
      id: 5,
      name: "Micro Irrigation Fund",
      shortName: "MIF",
      description: "A dedicated fund to expand coverage of micro irrigation systems across the country.",
      eligibility: "State governments, farmers, and farmer producer organizations.",
      benefits: [
        "Financial assistance for installing drip and sprinkler irrigation systems",
        "Water-saving and increased water use efficiency",
        "Increased crop productivity",
        "Reduced fertilizer usage through fertigation",
      ],
      deadline: "Ongoing",
      states: ["Gujarat", "Maharashtra", "Karnataka", "Andhra Pradesh", "Tamil Nadu"],
      cropTypes: ["Horticulture", "Cash Crops", "Vegetables"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Farm Layout Plan"],
      applicationSteps: [
        "Contact your district horticulture officer",
        "Submit application with farm details",
        "Get technical evaluation and approval",
        "Install the micro irrigation system",
        "Submit completion report for subsidy release",
      ],
      status: "Active",
      website: "https://pmksy.gov.in/",
    },
    {
      id: 6,
      name: "Kisan Credit Card Scheme",
      shortName: "KCC",
      description: "A credit scheme to provide adequate and timely credit support to farmers for their cultivation needs.",
      eligibility: "All farmers, sharecroppers, tenant farmers, and self-help groups of farmers.",
      benefits: [
        "Easy access to credit for crop production and other agricultural needs",
        "Flexible repayment options aligned with harvest cycles",
        "Coverage for post-harvest expenses and maintenance of farm assets",
        "Personal accident insurance coverage"
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Aadhaar Card", "Land Records", "Passport Size Photo", "Bank Account Details"],
      applicationSteps: [
        "Visit your nearest bank branch",
        "Fill out the KCC application form",
        "Submit required documents",
        "Bank processes application and conducts field verification",
        "Card is issued upon approval"
      ],
      status: "Active",
      website: "https://www.nabard.org/content.aspx?id=591",
    },
    {
      id: 7,
      name: "National Food Security Mission",
      shortName: "NFSM",
      description: "A mission to increase production of rice, wheat, pulses, coarse cereals, and commercial crops through area expansion and productivity enhancement.",
      eligibility: "Farmers in target districts growing focus crops.",
      benefits: [
        "Financial assistance for improved technologies and practices",
        "Subsidies on seeds, machinery, and inputs",
        "Training and capacity building programs",
        "Demonstration of improved practices"
      ],
      deadline: "Seasonal - Before crop sowing",
      states: ["Uttar Pradesh", "Punjab", "Haryana", "Bihar", "Maharashtra"],
      cropTypes: ["Rice", "Wheat", "Pulses", "Coarse Cereals"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Farmer Registration"],
      applicationSteps: [
        "Contact district agriculture office",
        "Submit application with crop plan",
        "Get verification of land and proposed activities",
        "Receive approval and implement practices"
      ],
      status: "Active",
      website: "https://nfsm.gov.in/",
    },
    {
      id: 8,
      name: "Paramparagat Krishi Vikas Yojana",
      shortName: "PKVY",
      description: "A scheme to promote organic farming and improve soil health through natural farming methods.",
      eligibility: "Individual farmers or groups interested in organic farming.",
      benefits: [
        "Financial assistance for organic inputs",
        "Support for certification process",
        "Marketing assistance for organic produce",
        "Training in organic farming practices"
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["Organic Crops"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Declaration of Organic Practices"],
      applicationSteps: [
        "Form or join a farmer group",
        "Register with local agriculture department",
        "Submit organic farming proposal",
        "Implement organic practices",
        "Apply for certification"
      ],
      status: "Active",
      website: "https://pgsindia-ncof.gov.in/pkvy/index.aspx",
    },
    {
      id: 9,
      name: "Agriculture Infrastructure Fund",
      shortName: "AIF",
      description: "A financing facility for investment in agriculture infrastructure projects.",
      eligibility: "Farmers, FPOs, PACS, Marketing Cooperative Societies, and Agri-entrepreneurs.",
      benefits: [
        "Interest subvention of 3% per annum",
        "Credit guarantee coverage",
        "Long repayment period up to 15 years",
        "Moratorium period for principal repayment"
      ],
      deadline: "Ongoing until 2025-26",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Project Proposal", "KYC Documents", "Land Documents", "Business Plan"],
      applicationSteps: [
        "Prepare detailed project report",
        "Apply through online portal",
        "Submit documents to lending institution",
        "Get project appraisal and approval",
        "Receive disbursement of funds"
      ],
      status: "Active",
      website: "https://agriinfra.dac.gov.in/",
    },
    {
      id: 10,
      name: "Sub-Mission on Agricultural Mechanization",
      shortName: "SMAM",
      description: "A scheme to increase the reach of farm mechanization to small and marginal farmers.",
      eligibility: "Individual farmers, Custom Hiring Centers, Hi-tech hubs.",
      benefits: [
        "Subsidies on purchase of agricultural machinery",
        "Support for establishing custom hiring centers",
        "Training and demonstration of equipment",
        "Financial assistance for mechanization projects"
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Quotation for Machinery"],
      applicationSteps: [
        "Contact district agriculture office",
        "Submit application with machinery details",
        "Get technical evaluation",
        "Receive approval and purchase equipment",
        "Submit proof of purchase for subsidy release"
      ],
      status: "Active",
      website: "https://farmech.dac.gov.in/",
    },
    {
      id: 11,
      name: "National Bamboo Mission",
      shortName: "NBM",
      description: "A mission to promote bamboo sector through area based regionally differentiated strategy.",
      eligibility: "Farmers, entrepreneurs, and cooperatives interested in bamboo cultivation.",
      benefits: [
        "Financial assistance for bamboo plantation",
        "Support for nursery development",
        "Market linkage assistance",
        "Training in bamboo cultivation and processing"
      ],
      deadline: "Seasonal",
      states: ["Northeast States", "Maharashtra", "Madhya Pradesh", "Karnataka", "Odisha"],
      cropTypes: ["Bamboo"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Project Proposal"],
      applicationSteps: [
        "Contact state bamboo development agency",
        "Submit proposal for bamboo plantation",
        "Get site verification and approval",
        "Implement plantation program",
        "Submit progress reports for fund release"
      ],
      status: "Active",
      website: "https://nbm.nic.in/",
    },
    {
      id: 12,
      name: "PM Krishi Sinchai Yojana",
      shortName: "PMKSY",
      description: "A scheme to extend irrigation coverage and improve water use efficiency.",
      eligibility: "All farmers with special focus on small and marginal farmers.",
      benefits: [
        "Assistance for micro-irrigation systems",
        "Support for water conservation structures",
        "Per drop more crop initiatives",
        "Watershed development projects"
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Water Source Details"],
      applicationSteps: [
        "Apply through local agriculture office",
        "Submit irrigation plan",
        "Get technical feasibility check",
        "Receive approval and implement system",
        "Submit completion report"
      ],
      status: "Active",
      website: "https://pmksy.gov.in/",
    },
    {
      id: 13,
      name: "Rashtriya Krishi Vikas Yojana",
      shortName: "RKVY",
      description: "A scheme to ensure holistic development of agriculture and allied sectors.",
      eligibility: "State governments and farmers through state implementation agencies.",
      benefits: [
        "Support for agriculture infrastructure",
        "Assistance for value addition projects",
        "Funding for innovative programs",
        "Support for agricultural research"
      ],
      deadline: "Annual planning cycle",
      states: ["All States"],
      cropTypes: ["All Crops"],
      documents: ["Project Proposal", "Implementation Plan", "State Approval", "Progress Reports"],
      applicationSteps: [
        "State prepares agriculture development plan",
        "Submit proposals to RKVY division",
        "Get approval from national committee",
        "Implement approved projects",
        "Regular monitoring and reporting"
      ],
      status: "Active",
      website: "https://rkvy.nic.in/",
    },
    {
      id: 14,
      name: "Mission for Integrated Development of Horticulture",
      shortName: "MIDH",
      description: "A scheme for holistic growth of horticulture sector including fruits, vegetables, and flowers.",
      eligibility: "Farmers, horticulturists, and entrepreneurs in horticulture sector.",
      benefits: [
        "Support for nurseries and tissue culture units",
        "Assistance for protected cultivation",
        "Post-harvest management support",
        "Market infrastructure development"
      ],
      deadline: "Ongoing",
      states: ["All States"],
      cropTypes: ["Horticulture", "Fruits", "Vegetables", "Flowers"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Cultivation Plan"],
      applicationSteps: [
        "Contact district horticulture officer",
        "Submit detailed project proposal",
        "Get technical evaluation",
        "Receive approval and implement project",
        "Regular monitoring and reporting"
      ],
      status: "Active",
      website: "https://midh.gov.in/",
    },
    {
      id: 15,
      name: "National Mission on Oilseeds and Oil Palm",
      shortName: "NMOOP",
      description: "A mission to increase production and productivity of oilseeds and oil palm.",
      eligibility: "Farmers in potential areas for oilseeds and oil palm cultivation.",
      benefits: [
        "Financial assistance for cultivation",
        "Support for seed production",
        "Transfer of technology",
        "Marketing support for produce"
      ],
      deadline: "Seasonal",
      states: ["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Gujarat", "Maharashtra"],
      cropTypes: ["Oilseeds", "Oil Palm"],
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Cultivation Agreement"],
      applicationSteps: [
        "Register with state agriculture department",
        "Submit cultivation proposal",
        "Get area verification and approval",
        "Receive inputs and implement cultivation",
        "Regular monitoring of progress"
      ],
      status: "Active",
      website: "https://nmoop.gov.in/",
    }
  ]

  // Filter schemes based on selected state, crop type, and search query
  const filteredSchemes = schemes.filter((scheme) => {
    const matchesState =
      !state || state === "all" || scheme.states.includes(state) || scheme.states.includes("All States")
    const matchesCropType =
      !cropType || cropType === "all" || scheme.cropTypes.includes(cropType) || scheme.cropTypes.includes("All Crops")
    const matchesSearch =
      !searchQuery ||
      scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesState && matchesCropType && matchesSearch
  })

  // Get unique states and crop types for filters
  const uniqueStates = Array.from(new Set(schemes.flatMap((scheme) => scheme.states)))
  const uniqueCropTypes = Array.from(new Set(schemes.flatMap((scheme) => scheme.cropTypes)))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Government Schemes & Subsidies</h1>
      <p className="text-muted-foreground mb-8">
        Discover and apply for government schemes and subsidies available for farmers
      </p>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Find Schemes</CardTitle>
          <CardDescription>Filter schemes by state, crop type, or search by name</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {uniqueStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cropType">Crop Type</Label>
              <Select value={cropType} onValueChange={setCropType}>
                <SelectTrigger id="cropType">
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Crops</SelectItem>
                  {uniqueCropTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <Input
                id="search"
                placeholder="Search by name or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schemes List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Available Schemes ({filteredSchemes.length})</h2>

        {filteredSchemes.length === 0 ? (
          <Card className="p-8 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No schemes found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search query to find relevant schemes.
            </p>
            <Button
              onClick={() => {
                setState("")
                setCropType("")
                setSearchQuery("")
              }}
            >
              Reset Filters
            </Button>
          </Card>
        ) : (
          filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="flex items-center">
                      {scheme.name}
                      <Badge variant="outline" className="ml-2">
                        {scheme.shortName}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{scheme.description}</CardDescription>
                  </div>
                  <Badge className={scheme.status === "Active" ? "bg-green-500" : "bg-amber-500"}>
                    {scheme.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details">
                  <TabsList className="mb-4">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="eligibility">Eligibility & Benefits</TabsTrigger>
                    <TabsTrigger value="application">How to Apply</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Available In</h4>
                        <div className="flex flex-wrap gap-2">
                          {scheme.states.map((state) => (
                            <Badge key={state} variant="secondary">
                              {state}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Applicable Crops</h4>
                        <div className="flex flex-wrap gap-2">
                          {scheme.cropTypes.map((crop) => (
                            <Badge key={crop} variant="secondary">
                              {crop}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Application Deadline</h4>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {scheme.deadline}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild variant="outline" size="sm">
                        <a href={scheme.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Official Website
                        </a>
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="eligibility" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Eligibility Criteria</h4>
                      <p>{scheme.eligibility}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {scheme.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Required Documents</h4>
                      <ul className="space-y-2">
                        {scheme.documents.map((doc, index) => (
                          <li key={index} className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="application" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-4">Application Process</h4>
                      <ol className="space-y-4">
                        {scheme.applicationSteps.map((step, index) => (
                          <li key={index} className="flex">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                              {index + 1}
                            </div>
                            <div className="pt-1">{step}</div>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Need Help?</h4>
                      <p className="text-sm mb-4">
                        Our team can guide you through the application process for this scheme.
                      </p>
                      <Button>Get Application Assistance</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="bg-muted/50 flex justify-between gap-2">
                <Button variant="outline" asChild>
                  <a href={scheme.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
                {scheme.registrationUrl && (
                  <Button asChild>
                    <a href={scheme.registrationUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))
        )}
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>How do I know if I'm eligible for a scheme?</AccordionTrigger>
            <AccordionContent>
              Each scheme has specific eligibility criteria that are listed in the details. Generally, eligibility
              depends on factors like land ownership, farm size, crop type, and location. You can use the filters on
              this page to find schemes that match your situation, or contact your local agriculture office for
              personalized guidance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2">
            <AccordionTrigger>What documents are typically required for applying?</AccordionTrigger>
            <AccordionContent>
              Common documents include proof of identity (Aadhaar card), land records or proof of cultivation, bank
              account details, and sometimes crop-specific certificates. Some schemes may require additional
              documentation like project proposals or farm layout plans. Always check the specific requirements for each
              scheme before applying.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3">
            <AccordionTrigger>How long does the application process take?</AccordionTrigger>
            <AccordionContent>
              Processing times vary by scheme and can range from a few weeks to several months. Factors that affect
              processing time include the complexity of the scheme, the volume of applications, and the completeness of
              your documentation. For time-sensitive schemes, it's best to apply as early as possible.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4">
            <AccordionTrigger>Can I apply for multiple schemes simultaneously?</AccordionTrigger>
            <AccordionContent>
              Yes, in most cases you can apply for multiple schemes simultaneously as long as you meet the eligibility
              criteria for each. However, some schemes may have restrictions or may not be compatible with others. It's
              advisable to consult with an agriculture extension officer to optimize your benefits across different
              schemes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5">
            <AccordionTrigger>What should I do if my application is rejected?</AccordionTrigger>
            <AccordionContent>
              If your application is rejected, you should first understand the reason for rejection. Contact the
              scheme's helpline or visit your local agriculture office for clarification. Common reasons include
              incomplete documentation, ineligibility, or technical errors. Once you understand the issue, you can
              address it and reapply if the scheme allows reapplications.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

