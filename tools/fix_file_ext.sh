#!/bin/bash

# Loop through all .JPG files in the current directory
for file in *.JPG; do
  # Check if the file exists to avoid errors if no .JPG files are found
  if [ -e "$file" ]; then
    # Rename the file to lowercase .jpg
    mv "$file" "$(echo $file | tr '[:upper:]' '[:lower:]')"
  fi
done

echo "Renaming complete!"