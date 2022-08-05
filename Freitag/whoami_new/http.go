package main

import (
  "os"
  "fmt"
  "net/http"
  "crypto/rand"
  "log"
)

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    fmt.Fprintf(os.Stdout, "Listening on :%s\n", port)
    p, _ := rand.Prime(rand.Reader, 64)
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(os.Stdout, "This is a random number %d\n", p)
 	fmt.Fprintf(w, "This is a random number %d\n", p)
    })


    log.Fatal(http.ListenAndServe(":" + port, nil))
}

