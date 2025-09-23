import { ScrollTextIcon } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

const SuccessfulRequest = () => {
	return (
		<>
			<Header mode="light" />
			<div className="mx-auto flex h-166.5 items-center justify-center px-4">
				<div className="mx-auto flex max-w-135.5 flex-col items-center gap-2 text-center">
					<ScrollTextIcon className="size-24 text-primary" />
					<h1 className="font-bold text-2xl">Thank you!</h1>
					<p>
						Your request has been received. Our team will review the details and
						contact you within 1-2 business days.
					</p>
					<p className="my-10 font-bold text-primary">
						Need urgent support? Feel free to call us directly.
					</p>
					<Button>Back to Home</Button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SuccessfulRequest;
