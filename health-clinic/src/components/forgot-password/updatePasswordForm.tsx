import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import createClient from "@/utils/supabase/client";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";


const supabase = createClient()

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter.",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number." })
  .regex(/[\W_]/, {
    message: "Password must contain at least one special character.",
  });

const formSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });

      return false;
    }

    return true;
  });
const UpdatePasswordForm = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const router  = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsUpdating(true)

    const { data, error } = await supabase.auth.updateUser({
        password: values.newPassword
      })
    
    if(error)
    {
        toast.error("Error",{
            description:error.message})
        setIsUpdating(false)
    }
    else
    {
        toast.success("Success",{
            description: "Password Successfully Changed"
        })
        router.replace('/home')
    }
  };

  return (
    <div>
        <Toaster/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="newPassword"
                disabled={isUpdating}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">New Password *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="New Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                disabled={isUpdating}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Confirm Password *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Re-enter Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text-center">
            <Button
              type="submit"
              disabled={isUpdating}
              className="text-[1.1em] px-6 py-6 "
            >
              Confirm
            </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdatePasswordForm;
