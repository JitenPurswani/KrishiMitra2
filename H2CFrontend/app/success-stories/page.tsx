'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSuccessStories } from '../api/farming-data';

interface SuccessStory {
  id: string;
  title: string;
  content: string;
  farmerName: string;
  location: string;
  date: string;
}

export default function SuccessStories() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const data = await getSuccessStories();
        setStories(data);
      } catch (error) {
        console.error('Error loading success stories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Farmer Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                By {story.farmerName} from {story.location} | {new Date(story.date).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{story.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}