import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(/^(?:\+977|0)?9\d{9}$/);

const formSchema = z.object({
  name: z.string().min(3, { message: "Name should be more than 3 characters" }),
  phone: z.string().regex(phoneRegex, "Invalid number"),
  age: z.number().nonnegative("Age cannot be negative").min(3,"Age must be greater than 3").max(100,"Age must be less than 100"),
  email: z.string().email({ message: "Enter a valid email." }).optional(),
  location: z.string()
});

interface optionalProps{
  isHomeVisit?:boolean;
}

const AppointmentForm: React.FC<optionalProps> = ({isHomeVisit}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (values: z.infer<typeof formSchema>)=>{
    alert(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col  gap-8">
          {/*Form input fields*/}
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Age*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your age" type="number"
            min={3}
            max={100}
             />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Phone Number*</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone No" type="number" maxLength={10} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter you e-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isHomeVisit?<FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter you address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />:null}


          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <Button size={"lg"}>Submit</Button>
          </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
