import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import React from 'react';
import { cn } from "@/lib/utils";

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => {
				return (
					<Toast key={id} {...props} className={cn(
            "bg-slate-800 text-white border-slate-700",
            props.variant === "destructive" && "bg-red-800 border-red-700"
          )}>
						<div className="grid gap-1">
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && (
								<ToastDescription className="text-slate-300">{description}</ToastDescription>
							)}
						</div>
						{action}
						<ToastClose className="text-white/70 hover:text-white" />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}