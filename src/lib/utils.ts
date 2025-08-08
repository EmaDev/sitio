import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, differenceInMonths } from "date-fns";
import { es } from "date-fns/locale";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ITimeRange {
  from: Date;
  to: Date;
}

interface IFormattedTime {
  time: string;
  description: string;
}

export function formatExperienceTime(time: ITimeRange): IFormattedTime {
  const from = time.from;
  const to = time.to ?? new Date(); // por si es "Presente"

  const formattedFrom = format(from, "MMMM yyyy", { locale: es });
  const formattedTo = to.getTime() === new Date().getTime()
    ? "Presente"
    : format(to, "MMMM yyyy", { locale: es });

  const totalMonths = differenceInMonths(to, from);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let description = "";
  if (years > 0) {
    description += `${years} año${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    if (description) description += " ";
    description += `${months} mes${months > 1 ? "es" : ""}`;
  }

  return {
    time: `${capitalize(formattedFrom)} - ${capitalize(formattedTo)}`,
    description: description || "menos de un mes",
  };
}

// Capitaliza la primera letra (porque "agosto" => "Agosto")
function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}