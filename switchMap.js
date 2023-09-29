ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchCountryByAlphaCode( id )),
      )
      .subscribe( country => {
        if (!country){
          return this.router.navigateByUrl('');
        }
        console.log('Tenemos un país')
        return;
      });
  }