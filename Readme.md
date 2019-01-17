## Personal Website Workshop
This is a template personal website. Feel free to download and add in your own information into the index.html file! All you have to do is find the "EDIT HERE!" comments and replace the filler information.

## Example
Check out this example template site [tiny.cc/pw-example](https://tiny.cc/pw-example)

## Hosting
Step-by-step instructions with pictures to host your website on AWS can be found [tiny.cc/pw-steps](https://docs.google.com/document/d/1o64vjfZwpKMjpTm9GaTauZhlDqMVSAERpGxY7_dhZ70/edit?usp=sharing)

## Bucket Policy
{  
  "Version":"2012-10-17",  
  "Statement":[{  
	"Sid":"PublicReadGetObject",  
        "Effect":"Allow",  
	  "Principal": " * ",  
      "Action":["s3:GetObject"],  
      "Resource":["arn:aws:s3:::example.com/ * "  
      ]  
    }  
  ]  
}


## License
MIT License
