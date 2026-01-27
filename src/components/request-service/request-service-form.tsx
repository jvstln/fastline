"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollTextIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type RequestService, requestServiceSchema } from "@/lib/schema";
import { Button } from "../ui/button";
import { Combobox } from "../ui/combobox";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormFieldComponent,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export const RequestServiceForm = () => {
  const form = useForm({
    resolver: zodResolver(requestServiceSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      sector: "",
      service: "",
      location: "",
      projectDetails: "",
      preferredContactMethod: "",
    },
  });

  const handleSubmit = async (values: RequestService) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // const response = await sendRequestServiceEmail(formData);
    // if (!response.success) {
    // 	toast.error("Error submitting request", {
    // 		description: response.message,
    // 	});
    // }

    toast("This feature is not available at the moment");
  };

  const FormField = useFormFieldComponent(form.control);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-10"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="mx-auto flex max-w-149.5 flex-col items-center gap-1 bg-background text-center">
          <ScrollTextIcon className="size-15.5 text-primary" />
          <h2 className="font-semibold text-2xl">Request Service</h2>
          <p>
            Fill out the form with your details, our team will review your
            request and contact you shortly to discuss the specifics of your
            request.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company/Organization (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your company name (if applicable)"
                    {...field}
                    value={String(field.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    value={String(field.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="sector"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry/Sector (Optional)</FormLabel>
                <FormControl>
                  <Select
                    value={String(field.value)}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your company's industry " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                      <SelectItem value="banking-finance">
                        Banking & Finance
                      </SelectItem>
                      <SelectItem value="telecommunication">
                        Telecommunication
                      </SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Service Needed</FormLabel>
                <Combobox
                  options={[
                    "Security Guard Services",
                    "Emergency Response",
                    "24/7 Monitoring",
                    "Risk Assessment",
                    "Safety Training",
                    "Compliance Audit",
                  ]}
                  placeholder="Enter the service you need"
                  formControl
                  value={field.value}
                  onValueChange={field.onChange}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location/Site Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Where is the service needed?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="projectDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe your needs or challenges"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="preferredContactMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            size="lg"
            className="mx-auto w-full max-w-150"
            isLoading={form.formState.isSubmitting}
            loadingText="Submitting..."
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
