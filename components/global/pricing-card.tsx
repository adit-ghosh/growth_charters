"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Loader2 } from "lucide-react";

// Define Razorpay types
interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayPaymentResponse) => void;
  prefill: {
    name: string;
    email: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayInstance {
  open: () => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  customPrice?: boolean;
  features: Array<{ name: string; included: boolean }>;
  popular: boolean;
  color: string;
}

interface PricingCardProps {
  plan: Plan;
  isAnnual: boolean;
}

export function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const [loadingPlan, setLoadingPlan] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handlePayment = async () => {
    if (plan.customPrice) {
      window.location.href = "mailto:sales@growthcharter.com?subject=Enterprise Plan Inquiry";
      return;
    }

    setLoadingPlan(true);

    try {
      const amount = isAnnual ? plan.annualPrice : plan.monthlyPrice;

      if (!amount) {
        throw new Error("Invalid plan price");
      }

      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          planName: plan.name,
          planId: plan.id,
        }),
      });

      const order = await orderResponse.json();

      if (!order.id) {
        throw new Error("Failed to create order");
      }

      const configResponse = await fetch("/api/razorpay-config");
      const { keyId } = await configResponse.json();

      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        const options: RazorpayOptions = {
          key: keyId,
          amount: order.amount,
          currency: order.currency,
          name: "Growth Charter",
          description: `${plan.name} Plan - ${isAnnual ? "Annual" : "Monthly"}`,
          order_id: order.id,
          handler: async (response: RazorpayPaymentResponse) => {
            // Verify payment
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              alert("Payment successful! Welcome to Growth Charter.");
              window.location.href = "/dashboard";
            } else {
              alert("Payment verification failed. Please try again.");
            }
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
          },
          theme: {
            color: "#748759",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      document.body.appendChild(script);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Payment error:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setLoadingPlan(false);
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        plan.popular ? "md:scale-105 md:z-10" : ""
      }`}
    >
      {/* Card Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`} />

      {/* Card Border Glow */}
      {plan.popular && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary"
          animate={{
            boxShadow: [
              "0 0 20px rgba(116, 135, 89, 0.3)",
              "0 0 40px rgba(116, 135, 89, 0.6)",
              "0 0 20px rgba(116, 135, 89, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      )}

      <div
        className={`relative p-8 border-2 rounded-2xl backdrop-blur-sm ${
          plan.popular
            ? "border-primary bg-card/80"
            : "border-border bg-card/50 hover:border-primary/50"
        }`}
      >
        {/* Popular Badge */}
        {plan.popular && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground bg-primary mb-4"
          >
            Most Popular
          </motion.div>
        )}

        {/* Plan Name */}
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

        {/* Pricing */}
        <div className="mb-8">
          {plan.customPrice ? (
            <div>
              <span className="text-4xl font-bold">Custom</span>
              <p className="text-muted-foreground text-sm mt-2">Contact sales for pricing</p>
            </div>
          ) : (
            <motion.div
              key={isAnnual ? "annual" : "monthly"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-5xl font-bold">
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className="text-muted-foreground ml-2">/{isAnnual ? "year" : "month"}</span>
              {isAnnual && plan.monthlyPrice && (
                <p className="text-sm text-primary mt-2">
                  ${(plan.annualPrice! / 12).toFixed(0)}/month billed annually
                </p>
              )}
            </motion.div>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={handlePayment}
          disabled={loadingPlan}
          className={`w-full h-10 px-4 py-2 rounded-full mb-8 font-semibold transition-all flex items-center justify-center gap-2 ${
            plan.popular
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "border border-primary/30 hover:border-primary hover:bg-primary/10"
          } ${loadingPlan ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loadingPlan ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : plan.customPrice ? (
            "Contact Sales"
          ) : (
            "Get Started"
          )}
        </button>

        {/* Features List */}
        <div className="space-y-4">
          {plan.features.map((feature, fidx) => (
            <motion.div
              key={fidx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: fidx * 0.05 }}
              className="flex items-start gap-3"
            >
              {feature.included ? (
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              )}
              <span
                className={
                  feature.included ? "text-foreground text-sm" : "text-muted-foreground text-sm"
                }
              >
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
