import { Args, Command, Flags } from '@oclif/core'
import { Options, defaultConfig, writeEnvironment } from "../utils"

export default class Generate extends Command {
  static description = 'generates sample env file'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static usage = '--env .env --sample .env.example --banner "hello world" --removeComments --prefix REACT_APP_'

  static flags = {
    env: Flags.string({
      char: 'e',
      required: false,
      description: "input file name",
    }),

    sample: Flags.string({
      char: 's',
      required: false,
      description: "output file name"
    }),

    banner: Flags.string({
      char: 'b',
      required: false,
      description: "add banner to output file"
    }),


    prefix: Flags.string({
      char: "p",
      description:
        "List of string prefixes to use only certain env variables, could be an empty string to use all available variables.",
      required: false,
    }),

    removeComments: Flags.boolean({
      char: "r",
      description:
        "removes comment from output file.",
      required: false,
    })

  }

  static args = {
    file: Args.string({ description: 'file to read' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Generate)

    const options : Options = {
      ...args,
      ...flags
    }

    writeEnvironment(options)
  }
}
