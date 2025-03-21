'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFarmingTips } from '../api/farming-data';

interface FarmingTip {
  id: string;
  title: string;
  content: string;
  season: string;
  date: string;
}

export default function FarmingTips() {
  const [tips, setTips] = useState<FarmingTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTips = async () => {
      try {
        const data = await getFarmingTips();
        setTips(data);
      } catch (error) {
        console.error('Error loading farming tips:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTips();
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
      <h1 className="text-3xl font-bold mb-6">Seasonal Farming Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <Card key={tip.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Season: {tip.season} | Date: {new Date(tip.date).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{tip.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}