# Personal Website Workshop
This is a template personal website. Feel free to download and add in your own information into the index.html file! All you have to do is find the "EDIT HERE!" comments and replace the filler information.

I recommend hosting on GitHub Pages. It's free and easy to use!

## AWS Hosting

If you really hate yourself and want to learn AWS, here ya go:

[Step-by-step](https://docs.google.com/document/d/1o64vjfZwpKMjpTm9GaTauZhlDqMVSAERpGxY7_dhZ70/edit?usp=sharing) instructions with pictures

## Bucket Policy
```
{  
  "Version":"2012-10-17",  
  "Statement":[{  
    "Sid":"PublicReadGetObject",  
    "Effect":"Allow",  
      "Principal": "*",  
    "Action":["s3:GetObject"],  
    "Resource":["arn:aws:s3:::example.com/*"]  
  }]  
}
```


## License
MIT License
