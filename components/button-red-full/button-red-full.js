Component({
  mixins: [],
  data: {},
  props: {
    text: 'Button',
    isDisabled:  false ,
    onClickMe: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClickMe() {
      this.props.onClickMe();
    }
  }
});
