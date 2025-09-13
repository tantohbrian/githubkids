import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Stepper, { Step } from "@/components/ui/Stepper";

interface SignupFormProps {
  children: React.ReactNode;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignupForm = ({ children }: SignupFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"parent" | "teacher">(
    "parent"
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "parent" as "parent" | "teacher",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 2) {
      // Validate name and email
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (step === 3) {
      // Validate passwords
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleRoleChange = (role: "parent" | "teacher") => {
    setSelectedRole(role);
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleComplete = () => {
    console.log("Signup data:", formData);
    // Handle signup logic here
    setIsOpen(false);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "parent",
    });
    setSelectedRole("parent");
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg w-full mx-4 p-0">
        <div className="bg-white rounded-lg">
          <DialogHeader className="text-center p-6 pb-4">
            <DialogTitle className="text-xl-system font-bold text-gray-900">
              Create Account
            </DialogTitle>
            <DialogDescription className="text-base-system text-gray-600">
              Join Bitcoin Kids and start your learning journey
            </DialogDescription>
          </DialogHeader>

          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log("Current step:", step);
            }}
            onFinalStepCompleted={handleComplete}
            backButtonText="Previous"
            nextButtonText="Next"
            stepCircleContainerClassName="bg-white border-gray-200"
            stepContainerClassName="bg-white"
            contentClassName="bg-white"
            footerClassName="bg-white"
            validateStep={validateStep}
          >
            {/* Step 1: Welcome & Role Selection */}
            <Step>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                    Welcome to Bitcoin Kids!
                  </h3>
                  <p className="text-sm-system text-gray-600">
                    Let's get you started. First, tell us who you are.
                  </p>
                </div>

                <Tabs
                  value={selectedRole}
                  onValueChange={handleRoleChange}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                    <TabsTrigger
                      value="parent"
                      className="text-sm-system data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600"
                    >
                      Parent
                    </TabsTrigger>
                    <TabsTrigger
                      value="teacher"
                      className="text-sm-system data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600"
                    >
                      Teacher
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </Step>

            {/* Step 2: Name & Email */}
            <Step>
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                    Your Information
                  </h3>
                  <p className="text-sm-system text-gray-600">
                    Please provide your basic details.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm-system font-medium text-gray-700 mb-2 block">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="First name"
                        className={`pl-10 h-12 text-base-system border-gray-200 focus:border-primary focus:ring-0 ${
                          errors.firstName ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm-system font-medium text-gray-700 mb-2 block">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Last name"
                        className={`pl-10 h-12 text-base-system border-gray-200 focus:border-primary focus:ring-0 ${
                          errors.lastName ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm-system font-medium text-gray-700 mb-2 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      type="email"
                      placeholder="Enter your email"
                      className={`pl-10 h-12 text-base-system border-gray-200 focus:border-primary focus:ring-0 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </Step>

            {/* Step 3: Password */}
            <Step>
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                    Secure Your Account
                  </h3>
                  <p className="text-sm-system text-gray-600">
                    Create a strong password to protect your account.
                  </p>
                </div>

                <div>
                  <label className="text-sm-system font-medium text-gray-700 mb-2 block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className={`pl-10 pr-10 h-12 text-base-system border-gray-200 focus:border-primary focus:ring-0 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm-system font-medium text-gray-700 mb-2 block">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className={`pl-10 pr-10 h-12 text-base-system border-gray-200 focus:border-primary focus:ring-0 ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
            </Step>

            {/* Step 4: Create Account */}
            <Step>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                    Ready to Get Started!
                  </h3>
                  <p className="text-sm-system text-gray-600">
                    Review your information and create your account.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm-system text-gray-600">Role:</span>
                    <span className="text-sm-system font-medium text-gray-900 capitalize">
                      {formData.role}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm-system text-gray-600">Name:</span>
                    <span className="text-sm-system font-medium text-gray-900">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm-system text-gray-600">Email:</span>
                    <span className="text-sm-system font-medium text-gray-900">
                      {formData.email}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs-system text-gray-500">
                    By creating an account, you agree to our Terms of Service
                    and Privacy Policy.
                  </p>
                </div>
              </div>
            </Step>
          </Stepper>

          {/* Login Link */}
          <div className="text-center p-6 pt-4 border-t border-gray-200">
            <p className="text-sm-system text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary hover:underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
