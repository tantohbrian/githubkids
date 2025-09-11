"use client";

import { useState } from "react";
import {
  Bitcoin,
  Sparkles,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  School,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("parent");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, userType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-background flex flex-col">
      {/* Simplified Navbar */}
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bitcoin className="h-10 w-10 text-primary" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bitcoin Kids
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Illustration and Info */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-secondary flex items-center justify-center z-0">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary flex items-center justify-center z-0">
                  <ShieldCheck className="h-10 w-10 text-white" />
                </div>

                <div className="relative bg-white rounded-2xl shadow-xl p-8 border-4 border-primary">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Join the Bitcoin Adventure!
                    </h2>
                    <p className="text-muted-foreground">
                      Start your journey to learn about Bitcoin in a fun and
                      safe environment
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🪙</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">
                          Fun Learning
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Interactive games and activities to learn about
                          Bitcoin
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🎮</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">
                          Educational Games
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Play while learning important financial concepts
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">📚</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">
                          Digital Library
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Access our collection of Bitcoin Kids books and
                          resources
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div>
              <Card className="border-border shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center text-foreground">
                    Create Your Account
                  </CardTitle>
                  <CardDescription className="text-center text-muted-foreground">
                    Join Bitcoin Kids to start learning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User Type Selection */}
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        I am a:
                      </Label>
                      <RadioGroup
                        value={userType}
                        onValueChange={setUserType}
                        className="flex justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="parent"
                            id="parent"
                            className="text-primary"
                          />
                          <Label
                            htmlFor="parent"
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <User className="h-4 w-4" />
                            Parent
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="teacher"
                            id="teacher"
                            className="text-primary"
                          />
                          <Label
                            htmlFor="teacher"
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <School className="h-4 w-4" />
                            Teacher
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium"
                      >
                        Full Name
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        Email Address
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="password"
                        className="text-foreground font-medium"
                      >
                        Password
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10 border-border focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Eye className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-foreground font-medium"
                      >
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-10 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            agreeToTerms: checked as boolean,
                          }))
                        }
                        className="mt-1"
                      />
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm text-muted-foreground"
                      >
                        I agree to the Bitcoin Kids{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="purpleOutline"
                      className="w-full rounded-full py-3 text-white font-medium"
                      disabled={!formData.agreeToTerms}
                    >
                      Create Account
                    </Button>

                    {/* Login Link */}
                    <div className="text-center">
                      <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <a
                          href="#"
                          className="text-primary hover:underline font-medium"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Fun Elements */}
              <div className="flex justify-center mt-8 space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg">🪙</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-lg">🎮</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Bitcoin Kids. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};
