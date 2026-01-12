"use client";

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Globe, Monitor, Smartphone, MapPin, ExternalLink, Calendar, Clock, Info, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Visit } from '@/lib/types';
import PinProtection from '@/components/forms/pin-protection';
import { getRecentVisits } from '@/services/firebase/analytics';

const parseUserAgent = (ua: string) => {
    if (ua.includes('iPhone') || ua.includes('Android')) {
        return { icon: <Smartphone className="h-4 w-4" />, type: 'Mobile' };
    }
    return { icon: <Monitor className="h-4 w-4" />, type: 'Desktop' };
};


export default function DashboardPage() {
    const CORRECT_PIN = "2024";
    const [visits, setVisits] = useState<Visit[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedVisit, setSelectedVisit] = useState<Visit | null>(null);

    useEffect(() => {
        const fetchVisits = async () => {
            setLoading(true);
            const result = await getRecentVisits(100);
            if (result.ok && result.data) {
                setVisits(result.data);
            }
            setLoading(false);
        };

        fetchVisits();
    }, []);

    const handleRowClick = (visit: Visit) => {
        setSelectedVisit(visit);
    };

    const handleCloseDialog = () => {
        setSelectedVisit(null);
    };

    const googleMapsUrl = selectedVisit?.location.lat && selectedVisit?.location.lng
        ? `https://www.google.com/maps/search/?api=1&query=${selectedVisit.location.lat},${selectedVisit.location.lng}`
        : null;

    return (
        <>
            <main className="container mx-auto max-w-7xl px-4 py-12">
                <PinProtection correctPin={CORRECT_PIN}>
                    <div className="space-y-4 text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold">Analytics Dashboard</h1>
                        <p className="text-lg text-muted-foreground">
                            A summary of your website&apos;s recent visitors.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Visits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <div className="flex justify-center py-10">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                </div>
                            ) : (
                                <Table>
                                    {/* TableHeader igual... */}
                                    <TableBody>
                                        <TooltipProvider>
                                            {visits.map((visit, index) => {
                                                const { icon, type } = parseUserAgent(visit.userAgent);
                                                return (
                                                    <TableRow
                                                        key={visit.timestamp + index}
                                                        onClick={() => handleRowClick(visit)}
                                                        className="cursor-pointer"
                                                    >
                                                        <TableCell className="font-mono text-xs max-w-xs truncate">
                                                            {visit.page}
                                                        </TableCell>
                                                        <TableCell>
                                                            <div>{visit.date}</div>
                                                            <div className="text-xs text-muted-foreground">{visit.time}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                <Globe className="h-4 w-4 text-muted-foreground" />
                                                                <span>{visit.location.city}, {visit.location.country}</span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="font-mono text-xs">{visit.ip}</TableCell>
                                                        <TableCell className="text-right">
                                                            <div className="flex items-center justify-end gap-2">
                                                                {icon}
                                                                <span className="text-xs">{type}</span>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TooltipProvider>
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>

                </PinProtection>
            </main>

            <Dialog open={!!selectedVisit} onOpenChange={(open) => !open && handleCloseDialog()}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">Visit Details</DialogTitle>
                        <DialogDescription>
                            Detailed information for the visit on {selectedVisit?.date} at {selectedVisit?.time}.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedVisit && (
                        <div className="grid gap-4 py-4 text-sm">
                            <div className="flex items-start gap-3">
                                <Info className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h4 className="font-semibold">Page Visited</h4>
                                    <p className="text-muted-foreground font-mono text-xs break-all">{selectedVisit.page}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h4 className="font-semibold">Timestamp</h4>
                                    <p className="text-muted-foreground">{selectedVisit.date} at {selectedVisit.time} ({new Date(selectedVisit.timestamp).toUTCString()})</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Globe className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-muted-foreground">{selectedVisit.location.city}, {selectedVisit.location.country} ({selectedVisit.ip})</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Monitor className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h4 className="font-semibold">Device Information</h4>
                                    <p className="text-muted-foreground font-mono text-xs break-all">{selectedVisit.userAgent}</p>
                                </div>
                            </div>
                            {googleMapsUrl && (
                                <Button asChild className="mt-4">
                                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                        <MapPin className="mr-2 h-4 w-4" />
                                        Open in Google Maps
                                    </a>
                                </Button>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}