// Simulated API response types
interface FarmingTip {
  id: string;
  title: string;
  content: string;
  season: string;
  date: string;
}

interface SuccessStory {
  id: string;
  title: string;
  content: string;
  farmerName: string;
  location: string;
  date: string;
}

// Simulated farming tips data
const farmingTips: FarmingTip[] = [
  {
    id: '1',
    title: 'Optimal Irrigation Practices for Summer',
    content: 'During summer months, it\'s crucial to irrigate crops during early morning or late evening to minimize water loss through evaporation. Consider using drip irrigation systems for better water efficiency. Monitor soil moisture levels regularly and adjust watering schedules accordingly.',
    season: 'Summer',
    date: '2024-03-15'
  },
  {
    id: '2',
    title: 'Pest Management in Monsoon',
    content: 'Monsoon season brings increased risk of pest infestations. Implement integrated pest management strategies including regular field monitoring, use of pest-resistant varieties, and biological control methods. Maintain field hygiene and proper drainage to prevent waterlogging.',
    season: 'Monsoon',
    date: '2024-03-14'
  },
  {
    id: '3',
    title: 'Winter Crop Protection',
    content: 'Protect winter crops from frost damage by using row covers or tunnels. Maintain optimal soil moisture as dry soil conducts cold better. Consider intercropping with frost-resistant varieties and maintain good air circulation to prevent fungal diseases.',
    season: 'Winter',
    date: '2024-03-13'
  }
];

// Simulated success stories data
const successStories: SuccessStory[] = [
  {
    id: '1',
    title: 'Organic Farming Success',
    content: 'After switching to organic farming methods, I saw a 40% increase in soil fertility and a significant improvement in crop quality. The transition took time, but the long-term benefits have been remarkable. My produce now commands premium prices in the local market.',
    farmerName: 'Rajesh Patel',
    location: 'Gujarat',
    date: '2024-03-15'
  },
  {
    id: '2',
    title: 'Smart Irrigation Revolution',
    content: 'Implementing smart irrigation systems helped me reduce water consumption by 60% while maintaining optimal crop yield. The initial investment was recovered within two growing seasons through water savings and improved crop quality.',
    farmerName: 'Lakshmi Devi',
    location: 'Karnataka',
    date: '2024-03-14'
  },
  {
    id: '3',
    title: 'Sustainable Pest Management',
    content: 'By adopting integrated pest management techniques, I successfully reduced pesticide use by 70%. This not only lowered production costs but also helped restore beneficial insect populations in my fields.',
    farmerName: 'Amit Singh',
    location: 'Punjab',
    date: '2024-03-13'
  }
];

// API functions
export async function getFarmingTips() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return farmingTips;
}

export async function getFarmingTipById(id: string) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return farmingTips.find(tip => tip.id === id);
}

export async function getSuccessStories() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return successStories;
}

export async function getSuccessStoryById(id: string) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return successStories.find(story => story.id === id);
}