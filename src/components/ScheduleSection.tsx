import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, ChevronRight } from 'lucide-react';

interface ScheduleProps {
  registrationLink: string;
}

const ScheduleSection: React.FC<ScheduleProps> = ({ registrationLink }) => {
  return (
    <section id="schedule" className="py-20 bg-slate-800/50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three days of power-packed encounters.
          </p>
        </div>
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day1">Day 1: Oct 24</TabsTrigger>
            <TabsTrigger value="day2">Day 2: Oct 25</TabsTrigger>
            <TabsTrigger value="day3">Day 3: Oct 26</TabsTrigger>
          </TabsList>
          <TabsContent value="day1" className="mt-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader><CardTitle className="text-yellow-400">Prophetic Impartation & Healing</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p><Clock className="inline mr-2 h-4 w-4"/>3:00 PM Daily</p>
                <p><MapPin className="inline mr-2 h-4 w-4"/>Woodlands Stadium, Lusaka</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="day2" className="mt-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader><CardTitle className="text-yellow-400">Deliverance & Unstoppable Greatness Anointing</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p><Clock className="inline mr-2 h-4 w-4"/>3:00 PM Daily</p>
                <p><MapPin className="inline mr-2 h-4 w-4"/>Woodlands Stadium, Lusaka</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="day3" className="mt-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader><CardTitle className="text-yellow-400">Special Anointing Service</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                 <p><Clock className="inline mr-2 h-4 w-4"/>Time TBD</p>
                 <p><MapPin className="inline mr-2 h-4 w-4"/>Champions Royal Assembly, Lusaka</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-12">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8">
              Secure Your Spot for All 3 Days
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;