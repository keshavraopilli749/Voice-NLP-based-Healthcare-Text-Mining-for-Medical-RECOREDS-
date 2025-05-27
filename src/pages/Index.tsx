
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Download, Share2, Copy, Mail, MessageCircle, Stethoscope, Pill, FileText, Heart, Activity, Lightbulb, Apple, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { generatePDF } from '@/utils/pdfGenerator';
import { getMedicineForSymptoms, diseaseDatabase } from '@/utils/medicineDatabase';
import { formatPrescription } from '@/utils/prescriptionFormatter';
import { getHealthTips } from '@/utils/healthTips';

interface Prescription {
  disease: string;
  medicines: Array<{
    name: string;
    dosage: string;
    notes?: string;
  }>;
  symptoms: string[];
  date: string;
  doctorName: string;
}

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [prescription, setPrescription] = useState<Prescription | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [healthTips, setHealthTips] = useState<any>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      setTranscript('');
      recognitionRef.current.start();
    } else {
      toast({
        title: "Voice recognition not supported",
        description: "Please use a modern browser with speech recognition support.",
        variant: "destructive",
      });
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const generatePrescription = () => {
    if (!transcript.trim()) {
      toast({
        title: "No symptoms detected",
        description: "Please speak your symptoms first.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const result = getMedicineForSymptoms(transcript);
      
      if (result) {
        const newPrescription: Prescription = {
          disease: result.disease,
          medicines: result.medicines,
          symptoms: result.symptoms,
          date: new Date().toLocaleDateString(),
          doctorName: "Dr. AI Assistant"
        };
        
        setPrescription(newPrescription);
        setHealthTips(getHealthTips(result.disease));
        
        toast({
          title: "Prescription Generated!",
          description: `Found treatment for ${result.disease}`,
        });
      } else {
        toast({
          title: "No matching condition found",
          description: "Please try describing your symptoms differently.",
          variant: "destructive",
        });
      }
      
      setIsGenerating(false);
    }, 1500);
  };

  const downloadPDF = () => {
    if (prescription) {
      generatePDF(prescription);
      toast({
        title: "PDF Downloaded",
        description: "Prescription saved to your device.",
      });
    }
  };

  const shareWhatsApp = () => {
    if (prescription) {
      const message = formatPrescription(prescription);
      const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  const shareEmail = () => {
    if (prescription) {
      const message = formatPrescription(prescription);
      const subject = `Medical Prescription - ${prescription.disease}`;
      const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.open(url);
    }
  };

  const copyToClipboard = async () => {
    if (prescription) {
      const message = formatPrescription(prescription);
      try {
        await navigator.clipboard.writeText(message);
        toast({
          title: "Copied to clipboard",
          description: "Prescription copied successfully.",
        });
      } catch (err) {
        toast({
          title: "Copy failed",
          description: "Unable to copy to clipboard.",
          variant: "destructive",
        });
      }
    }
  };

  const exampleSymptoms = [
    "I have a fever and headache",
    "Give medicines for cold and cough",
    "I'm feeling nauseous and have stomach pain",
    "I have chest pain and difficulty breathing",
    "My throat is sore and I have a runny nose",
    "I have back pain and muscle aches",
    "I'm experiencing dizziness and fatigue",
    "I have joint pain and swelling",
    "My ear hurts",
    "I feel weak and tired",
    "I have a bad headache",
    "My stomach is upset",
    "I can't stop coughing",
    "I feel dizzy when I stand up",
    "My back is really painful",
    "I have a high fever",
    "I feel sick to my stomach",
    "My joints are stiff and sore"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-lg border-b border-indigo-100 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MedVoice
                </h1>
                <p className="text-lg text-gray-600 font-medium">AI-Powered Healthcare Assistant</p>
                <p className="text-sm text-gray-500">Record • Diagnose • Share • Heal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 px-4 py-2">
                <Activity className="w-4 h-4 mr-2" />
                AI Powered
              </Badge>
              <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Healthcare
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Voice Input Section */}
          <div className="xl:col-span-1 space-y-8">
            <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="text-center pb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-center space-x-3 text-2xl">
                  <Mic className="w-6 h-6" />
                  <span>Voice Input</span>
                </CardTitle>
                <p className="text-blue-100 text-sm mt-2">Speak your symptoms naturally</p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                {/* Enhanced Voice Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={isListening ? stopListening : startListening}
                    className={`w-40 h-40 rounded-full text-white font-bold text-xl transition-all duration-500 transform hover:scale-105 ${
                      isListening
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse shadow-2xl shadow-red-200 ring-4 ring-red-200'
                        : 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 shadow-2xl shadow-blue-200'
                    }`}
                  >
                    {isListening ? (
                      <div className="flex flex-col items-center">
                        <MicOff className="w-10 h-10 mb-2" />
                        <span className="text-lg">Stop</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Mic className="w-10 h-10 mb-2" />
                        <span className="text-lg">Speak</span>
                      </div>
                    )}
                  </Button>
                </div>

                {/* Enhanced Transcript Display */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 min-h-[120px] border-2 border-gray-200 shadow-inner">
                  <div className="flex items-center space-x-3 mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-800">Transcript</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    {transcript || (isListening ? "🎙️ Listening..." : "Click the microphone and speak your symptoms")}
                  </p>
                </div>

                {/* Enhanced Generate Button */}
                <Button 
                  onClick={generatePrescription}
                  disabled={!transcript.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating Prescription...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <Pill className="w-5 h-5" />
                      <span>Generate Prescription</span>
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Example Symptoms */}
            <Card className="border-2 border-green-200 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <Heart className="w-5 h-5" />
                  <span>Try These Examples</span>
                </CardTitle>
                <p className="text-green-100 text-sm mt-1">Click any example to try:</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {exampleSymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-blue-100 cursor-pointer hover:shadow-lg transition-all duration-300 hover:from-blue-100 hover:to-green-100 transform hover:scale-102"
                      onClick={() => setTranscript(symptom)}
                    >
                      <p className="text-sm text-gray-700 font-medium">"{symptom}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prescription Display */}
          <div className="xl:col-span-2 space-y-8">
            {prescription ? (
              <>
                {/* Prescription Card */}
                <Card className="border-2 border-purple-200 shadow-2xl bg-gradient-to-br from-white to-purple-50">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <FileText className="w-6 h-6" />
                      <span>Medical Prescription</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    {/* Header Info */}
                    <div className="border-b-2 border-gray-200 pb-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{prescription.doctorName}</h3>
                          <p className="text-lg text-gray-600">AI Healthcare Assistant</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg text-gray-600">Date: {prescription.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Diagnosis */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                        Diagnosis:
                      </h4>
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-4 py-2">
                        {prescription.disease}
                      </Badge>
                    </div>

                    {/* Symptoms */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
                      <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-green-600" />
                        Symptoms:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {prescription.symptoms.map((symptom, index) => (
                          <Badge key={index} variant="outline" className="text-gray-700 border-green-300 bg-green-100 px-3 py-1">
                            {symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Medicines */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                        <Pill className="w-5 h-5 mr-2 text-purple-600" />
                        Prescribed Medicines:
                      </h4>
                      <div className="space-y-4">
                        {prescription.medicines.map((medicine, index) => (
                          <div key={index} className="bg-white rounded-xl p-4 border-2 border-purple-200 shadow-md">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-lg text-gray-900">{medicine.name}</h5>
                                <p className="text-md text-gray-600 mt-1 font-medium">{medicine.dosage}</p>
                                {medicine.notes && (
                                  <p className="text-sm text-blue-600 mt-2 italic font-medium">{medicine.notes}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 border-t-2 border-gray-200">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button 
                          onClick={downloadPDF}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                        <Button 
                          onClick={copyToClipboard}
                          variant="outline"
                          className="border-2 border-gray-300 font-semibold py-3"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button 
                          onClick={shareWhatsApp}
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button 
                          onClick={shareEmail}
                          variant="outline"
                          className="border-2 border-gray-300 font-semibold py-3"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Health Tips Card */}
                {healthTips && (
                  <Card className="border-2 border-orange-200 shadow-2xl bg-gradient-to-br from-white to-orange-50">
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                      <CardTitle className="flex items-center space-x-3 text-2xl">
                        <Lightbulb className="w-6 h-6" />
                        <span>Health Tips & Recommendations</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      {/* Diet Tips */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                          <Apple className="w-5 h-5 mr-2 text-green-600" />
                          Recommended Diet:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-green-800 mb-2">✅ Include:</h5>
                            <ul className="space-y-1">
                              {healthTips.diet.include.map((item: string, index: number) => (
                                <li key={index} className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-800 mb-2">❌ Avoid:</h5>
                            <ul className="space-y-1">
                              {healthTips.diet.avoid.map((item: string, index: number) => (
                                <li key={index} className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Lifestyle Tips */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                          <Activity className="w-5 h-5 mr-2 text-blue-600" />
                          Lifestyle Recommendations:
                        </h4>
                        <ul className="space-y-3">
                          {healthTips.lifestyle.map((tip: string, index: number) => (
                            <li key={index} className="text-gray-700 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                              <span className="font-medium">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Home Remedies */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                          <Utensils className="w-5 h-5 mr-2 text-purple-600" />
                          Natural Remedies:
                        </h4>
                        <ul className="space-y-3">
                          {healthTips.homeRemedies.map((remedy: string, index: number) => (
                            <li key={index} className="text-gray-700 flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                              <span className="font-medium">{remedy}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Warning */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                        <h4 className="font-bold text-xl text-red-800 mb-3">⚠️ Important Note:</h4>
                        <p className="text-red-700 font-medium">
                          These tips are general recommendations. Always consult with a qualified healthcare professional 
                          for personalized medical advice, especially if symptoms persist or worsen.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card className="border-2 border-gray-200 shadow-2xl bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-16 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-16 h-16 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Prescription Generated</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Speak your symptoms using the voice input to generate a personalized prescription with health tips.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                      <Mic className="w-4 h-4 mr-2" />
                      Voice Powered
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 px-4 py-2">
                      <Heart className="w-4 h-4 mr-2" />
                      AI Diagnosis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
