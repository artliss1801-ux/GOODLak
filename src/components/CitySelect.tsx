'use client';

import * as React from 'react';
import { Check, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CITIES, getCitiesByRegion, City } from '@/lib/data/cities';

interface CitySelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function CitySelect({
  value,
  onChange,
  placeholder = 'Выберите город',
  disabled = false,
}: CitySelectProps) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const selectedCity = CITIES.find((city) => city.id === value);
  const citiesByRegion = getCitiesByRegion();

  // Фильтрация городов по поиску
  const filteredCitiesByRegion = React.useMemo(() => {
    if (!searchQuery) return citiesByRegion;

    const filtered: Record<string, City[]> = {};
    Object.entries(citiesByRegion).forEach(([region, cities]) => {
      const matched = cities.filter((city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matched.length > 0) {
        filtered[region] = matched;
      }
    });
    return filtered;
  }, [searchQuery, citiesByRegion]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className="w-full justify-between font-normal"
        >
          {selectedCity ? (
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>{selectedCity.name}</span>
              <span className="text-slate-400 text-xs">({selectedCity.region})</span>
            </span>
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Поиск города..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList className="max-h-[300px]">
            <CommandEmpty>Город не найден</CommandEmpty>
            {Object.entries(filteredCitiesByRegion).map(([region, cities]) => (
              <CommandGroup key={region} heading={region}>
                {cities.map((city) => (
                  <CommandItem
                    key={city.id}
                    value={city.id}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? '' : currentValue);
                      setOpen(false);
                      setSearchQuery('');
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === city.id ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    <span>{city.name}</span>
                    {city.country === 'BY' && (
                      <span className="ml-2 text-xs text-slate-400">(Беларусь)</span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
